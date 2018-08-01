import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "General",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "Posts",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Stories",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/typography",
    name: "Followers",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { path: "/icons", name: "Growth sugesstions", icon: "pe-7s-science", component: Icons },
  { path: "/maps", name: "Prediction", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/notifications",
    name: "Export report",
    icon: "pe-7s-bell",
    component: Notifications
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
