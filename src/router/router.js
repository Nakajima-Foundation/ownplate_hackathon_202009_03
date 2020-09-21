import Home from "@/components/Home";

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
];
