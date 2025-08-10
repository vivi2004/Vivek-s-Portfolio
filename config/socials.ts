import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "vivi2004",
    icon: Icons.gitHub,
    link: "https://github.com/vivi2004",
  },
  {
    name: "LinkedIn",
    username: "@vivekpurbey",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/vivek-kumar-p-3241a2259/",
  },
  {
    name: "Twitter",
    username: "@vivekpurbey",
    icon: Icons.twitter,
    link: "https://x.com/VPurbey123",
  },
  {
    name: "Gmail",
    username: "vivek.purbey",
    icon: Icons.gmail,
    link: "vivekpurbey586@gmail.com",
  },
];
