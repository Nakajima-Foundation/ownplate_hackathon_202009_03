import Home from "@/components/Home";
import QrList from "@/components/QRList"
import Accounting from '@/components/Accounting'
import menu from "@/components/menu";
import OrderAccept from "@/components/OrderAccept";
import Done from "@/components/Done"

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
  },
  {
    path: "/done",
    name: "done",
    component: Done,
  }
];
