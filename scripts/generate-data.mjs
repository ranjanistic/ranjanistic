
import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';
import { fileURLToPath } from 'url';

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE_PATH = path.join(__dirname, '..', 'data', 'portfolio-data.xlsx');
const OUTPUT_JSON_PATH = path.join(__dirname, '..', 'src', 'lib', 'generated-data.json');

console.log('Reading data from:', DATA_FILE_PATH);
console.log('Writing JSON to:', OUTPUT_JSON_PATH);

/**
 * portfolio-data.xlsx Structure:
 *
 * Sheet: HeroData
 * Columns: name, tagline, location, email, gitlab, github, linkedin
 * Note: Expects a single row of data.
 *
 * Sheet: NavLinks
 * Columns: href, label
 *
 * Sheet: SocialLinks
 * Columns: name, url, iconName (e.g., "Linkedin", "Github")
 *
 * Sheet: WorkExperience
 * Columns: role, company, companyLink, period, descriptionItems (use ";;" as separator for multiple items)
 *
 * Sheet: ProjectEntries (for homepage project list)
 * Columns: title, description, link, linkText
 *
 * Sheet: ProjectsDetailed (for individual project pages /projects/[slug])
 * Columns: id, slug, title, shortDescription, description (main paragraph), imageUrl, imageHint, technologies (comma-separated), liveLink, repoLink, storyline_json (a valid JSON string representing the ProjectStorylineItem[])
 * Example for storyline_json cell:
 * [{"type":"heading","content":"The Challenge"},{"type":"paragraph","content":"Details..."}]
 *
 * Sheet: SkillAreas (for homepage skills list)
 * Columns: title, skills (a single string, can include line breaks)
 *
 * Sheet: SkillCategoriesDetailed (for /skills page)
 * Columns: name, iconName (e.g., "Palette", "Code")
 *
 * Sheet: SkillsDetailed (for individual skills within categories on /skills page)
 * Columns: categoryName (must match a name from SkillCategoriesDetailed), name, level (number 0-100)
 *
 * Sheet: EducationEntries
 * Columns: degree, institution, period, details_json (a valid JSON string representing the EducationDetail[])
 * Example for details_json cell:
 * [{"specialization":"Physics"},{"projects":"Project X","projectLink":"http://...","projectLinkText":"View X"}]
 *
 */

function safeParseJSON(jsonString, fieldName, itemName) {
  if (!jsonString || typeof jsonString !== 'string') {
    console.warn(`Warning: Field '${fieldName}' for item '${itemName || ''}' is not a string or is empty. Returning empty array.`);
    return [];
  }
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error(`Error parsing JSON for field '${fieldName}' in item '${itemName || ''}':`, e.message);
    console.error('Problematic JSON string:', jsonString);
    return []; // Return empty array or handle error as appropriate
  }
}

try {
  if (!fs.existsSync(DATA_FILE_PATH)) {
    console.error(`ERROR: Data file not found at ${DATA_FILE_PATH}`);
    console.error('Please create "data/portfolio-data.xlsx" with the required sheets and columns.');
    // Create a dummy generated-data.json to prevent build failures if file is missing
    const dummyData = {
        heroData: {},
        navLinksData: [],
        socialLinksFooter: [],
        workExperienceData: [],
        projectData: [], // For homepage
        projects: [], // For detailed project pages
        skillsData: [], // For homepage
        skillCategories: [], // For skills page (categories with their skills)
        educationData: [],
    };
    fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(dummyData, null, 2));
    console.log('Created a dummy generated-data.json. Populate portfolio-data.xlsx and rebuild.');
    process.exit(0); // Exit gracefully to allow build to potentially continue with dummy data
  }

  const workbook = xlsx.readFile(DATA_FILE_PATH);
  const allData = {};

  // --- HeroData ---
  const heroDataSheet = workbook.Sheets['HeroData'];
  if (heroDataSheet) {
    const heroDataArray = xlsx.utils.sheet_to_json(heroDataSheet);
    allData.heroData = heroDataArray[0] || {};
  } else {
    console.warn("Sheet 'HeroData' not found. Using empty object.");
    allData.heroData = {};
  }

  // --- NavLinks ---
  const navLinksSheet = workbook.Sheets['NavLinks'];
  allData.navLinksData = navLinksSheet ? xlsx.utils.sheet_to_json(navLinksSheet) : [];

  // --- SocialLinks ---
  const socialLinksSheet = workbook.Sheets['SocialLinks'];
  allData.socialLinksFooter = socialLinksSheet ? xlsx.utils.sheet_to_json(socialLinksSheet) : [];

  // --- WorkExperience ---
  const workExpSheet = workbook.Sheets['WorkExperience'];
  if (workExpSheet) {
    const workExpArray = xlsx.utils.sheet_to_json(workExpSheet);
    allData.workExperienceData = workExpArray.map(item => ({
      ...item,
      description: item.descriptionItems ? String(item.descriptionItems).split(';;').map(s => s.trim()) : []
    }));
  } else {
    allData.workExperienceData = [];
  }

  // --- ProjectEntries (Homepage) ---
  const projectEntriesSheet = workbook.Sheets['ProjectEntries'];
  allData.projectData = projectEntriesSheet ? xlsx.utils.sheet_to_json(projectEntriesSheet) : [];
  
  // --- ProjectsDetailed ---
  const projectsDetailedSheet = workbook.Sheets['ProjectsDetailed'];
  if (projectsDetailedSheet) {
    const projectsDetailedArray = xlsx.utils.sheet_to_json(projectsDetailedSheet);
    allData.projects = projectsDetailedArray.map(p => ({
      ...p,
      technologies: p.technologies ? String(p.technologies).split(',').map(t => t.trim()) : [],
      storyline: safeParseJSON(p.storyline_json, 'storyline_json', p.title),
    }));
  } else {
    allData.projects = [];
  }

  // --- SkillAreas (Homepage) ---
  const skillAreasSheet = workbook.Sheets['SkillAreas'];
  allData.skillsData = skillAreasSheet ? xlsx.utils.sheet_to_json(skillAreasSheet) : [];

  // --- SkillCategoriesDetailed & SkillsDetailed (Skills Page) ---
  const skillCategoriesSheet = workbook.Sheets['SkillCategoriesDetailed'];
  const skillsDetailedSheet = workbook.Sheets['SkillsDetailed'];
  let skillCategoriesData = [];
  if (skillCategoriesSheet) {
    const categories = xlsx.utils.sheet_to_json(skillCategoriesSheet);
    const allSkills = skillsDetailedSheet ? xlsx.utils.sheet_to_json(skillsDetailedSheet) : [];
    
    skillCategoriesData = categories.map(cat => ({
      name: cat.name,
      iconName: cat.iconName,
      skills: allSkills
        .filter(skill => skill.categoryName === cat.name)
        .map(skill => ({ name: skill.name, level: Number(skill.level) || 0 }))
    }));
  }
  allData.skillCategories = skillCategoriesData;
  
  // --- EducationEntries ---
  const educationSheet = workbook.Sheets['EducationEntries'];
  if (educationSheet) {
    const educationArray = xlsx.utils.sheet_to_json(educationSheet);
    allData.educationData = educationArray.map(edu => ({
      ...edu,
      details: safeParseJSON(edu.details_json, 'details_json', edu.degree),
    }));
  } else {
    allData.educationData = [];
  }

  fs.mkdirSync(path.dirname(OUTPUT_JSON_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(allData, null, 2));
  console.log('Data generated successfully!');

} catch (error) {
  console.error('Error generating data from XLSX:', error);
  process.exit(1);
}
