export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Euphoria-check",
    contibutionDescription: "Improved the button and added functionality.",
    repoOwner: "Eupohoria",
    link: "https://github.com/vivi2004/javascript-master/pull/1",
  },
  {
    repo: "GameSphere",
    contibutionDescription:
      "Closed Issue: Fixed navbar issue on the main website and fixed the bugs.",
    repoOwner: "Chrome Gaming",
    link: "https://github.com/ChromeGaming/GameSphere/issues",
  },
  {
    repo: "Boomm-frontend",
    contibutionDescription: "Discover Icon fixed.",
    repoOwner: "Boomm",
    link: "https://github.com/boomm-india/boomm-frontend/pull/146#event-18863167925",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
