import Home from "@/components/Home";
import QrList from "@/components/QRList"
import Accounting from '@/components/Accounting'


export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/account",
    name: "account",
    component: Accounting
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
