import Home from "@/components/Home";
import QrList from "@/components/QRList"
import Accounting from '@/components/Accounting'
import menu from "@/components/menu";
import OrderAccept from "@/components/OrderAccept";


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
  {
    path: "/menu",
    name: "menu",
    component: menu,
  },
  {
    path: "/order_accept",
    name: "orderAccept",
    component: OrderAccept,
  }
];
