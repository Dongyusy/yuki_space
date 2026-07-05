import { defineConfig } from "astro/config";

const githubRepository = process.env.GITHUB_REPOSITORY;
const [githubOwner, githubRepo] = githubRepository?.split("/") ?? [];
const isGitHubPagesBuild = Boolean(process.env.GITHUB_ACTIONS && githubOwner && githubRepo);
const isUserOrOrgPage = githubRepo?.toLowerCase() === `${githubOwner?.toLowerCase()}.github.io`;

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: isGitHubPagesBuild ? `https://${githubOwner}.github.io` : "https://example.com",
  base: isGitHubPagesBuild && !isUserOrOrgPage ? `/${githubRepo}` : undefined,
});
