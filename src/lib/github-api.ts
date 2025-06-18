
'use server';
import type { GitHubUser, GitHubRepo } from './types';

const GITHUB_API_BASE_URL = 'https://api.github.com';

async function fetchGitHubAPI<T>(endpoint: string): Promise<T | null> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_API_KEY;

  if (!username) {
    console.warn('GITHUB_USERNAME environment variable is not set.');
    return null;
  }
  if (!token) {
    console.warn('GITHUB_API_KEY environment variable is not set. Unauthenticated requests have lower rate limits.');
  }

  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE_URL}${endpoint}`, {
      headers,
      next: { revalidate: 3600 } // Revalidate data every hour
    });

    if (!response.ok) {
      console.error(`GitHub API request failed for ${endpoint}: ${response.status} ${response.statusText}`);
      const errorBody = await response.json().catch(() => ({ message: 'Unknown error' }));
      console.error('Error body:', errorBody);
      return null;
    }
    return response.json() as Promise<T>;
  } catch (error) {
    console.error(`Error fetching from GitHub API (${endpoint}):`, error);
    return null;
  }
}

export async function getGitHubUser(): Promise<GitHubUser | null> {
  const username = process.env.GITHUB_USERNAME;
  if (!username) return null;
  return fetchGitHubAPI<GitHubUser>(`/users/${username}`);
}

export async function getGitHubRepos(limit: number = 6): Promise<GitHubRepo[] | null> {
  const username = process.env.GITHUB_USERNAME;
  if (!username) return null;
  // Fetch most recently updated repos
  return fetchGitHubAPI<GitHubRepo[]>(`/users/${username}/repos?sort=updated&direction=desc&per_page=${limit}`);
}
