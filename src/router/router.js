import Home from "@/components/Home";
import QrList from "@/components/QRList"

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
];
