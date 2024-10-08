import { Bookmark, CloudLightning, FileText, Home, MessageCircle, Newspaper, Zap } from "lucide-react";
import { FaPoll, FaSearch, FaUserCircle } from "react-icons/fa";
import { ArticleType, CommentType, RoutesType, StoryDataType } from "./types";

export const DesktopRoutes: RoutesType[] = [
  {
    Icon: Home,
    name: "Home",

    href: "/"
  }
  ,
  {
    Icon: Newspaper,
    name: "Citizen Insights",
    href: "/citizen-insights"
  },

  {
    Icon: Zap,
    name: "Current Affairs",
    href: "/current-affairs"
  },
  {
    Icon: FaSearch,
    name: "Search",
    href: "/search"
  },
  { Icon: MessageCircle,
    name: "Chats",
    href: "/chats"
  },
  {
    Icon: FileText,
    name: "Feed",
    href: "/feed"
  },
  {
    Icon: FaPoll,
    name:"Polls",
    href:"/polls"
  },
  {
    Icon: Bookmark,
    name: "Bookmarks",
    href: "/bookmarks",

  },
  {
    Icon: FaUserCircle,
    name: "Profile",
    href: "/profile"
  },

]
export const MobileRoutes: RoutesType[] = [
  {
    Icon: Home,
    name: "Home",

    href: "/"
  },
  {
    Icon: Bookmark,
    name: "Bookmarks",
    href: "/bookmarks",

  },
  {
    Icon: FileText,
    name: "Feed",
    href: "/feed"
  },
  {
    Icon: Newspaper,
    name: "Citizen Insights",
    href: "/citizen-insights"
  },

  {
    Icon: Zap,
    name: "Current Affairs",
    href: "/current-affairs"
  },
  {
    Icon: FaUserCircle,
    name: "Profile",
    href: "/profile"
  },

]
export const CheckRoutes = [

  "/",


]




export const Languages = [
  { code: "en", language: "English" },
  { code: "hi", language: "Hindi" },
  { language: "marathi", code: "mr" },
  { code: "te", language: "Telugu" },
  { code: "ta", language: "Tamil" },
  { language: "kannad", code: "kn" },
]
export const topicsOfInterest = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology"
]