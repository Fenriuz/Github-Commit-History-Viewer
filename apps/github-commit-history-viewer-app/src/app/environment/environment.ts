export const environment = {
  apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/',
  defaultGithubProjectUrl:
    import.meta.env.VITE_DEFAULT_GITHUB_PROJECT_URL ??
    'https://github.com/Fenriuz/github-commit-history-viewer',
};
