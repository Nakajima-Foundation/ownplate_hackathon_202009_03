import Home from "@/components/Home";
import QrList from "@/components/QRList"
import menu from "@/components/menu";


export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/qr-list",
    name: "qrlist",
    component: QrList,
  },
  {
    path: "/menu",
    name: "menu",
    component: menu,
  },
];
