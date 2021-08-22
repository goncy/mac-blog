import {File} from "./types";
import twitterIcon from "./public/assets/icons/twitter.png";
import twitchIcon from "./public/assets/icons/twitch.png";
import youtubeIcon from "./public/assets/icons/youtube.png";
import discordIcon from "./public/assets/icons/discord.png";
import folderIcon from "./public/assets/icons/folder.png";
import txtIcon from "./public/assets/icons/txt.png";

export const DESKTOP_FILES: File[] = [
  {
    icon: twitterIcon,
    name: "Twitter",
    path: "https://twitter.gonzalopozzo.com",
  },
  {
    icon: twitchIcon,
    name: "Twitch",
    path: "https://twitch.gonzalopozzo.com",
  },
  {
    icon: youtubeIcon,
    name: "YouTube",
    path: "https://youtube.gonzalopozzo.com",
  },
  {
    icon: discordIcon,
    name: "Discord",
    path: "https://discord.gonzalopozzo.com",
  },
  {
    icon: folderIcon,
    name: "React resources",
    path: "/finder/react-resources",
  },
  {
    icon: txtIcon,
    name: "About this",
    path: "/text/about-this",
  },
];
