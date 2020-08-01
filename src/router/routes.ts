import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "Home",
    icon: "mdi-home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "mdi-card-account-details",
    component: async () =>
      import(/* webpackChunkName: "profile" */ "../views/Profiles.vue"),
  },
  {
    path: "/tasks",
    name: "Tasks",
    icon: "mdi-view-list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: async () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/materials",
    name: "Materials",
    icon: "mdi-hammer-wrench",
    component: async () =>
      import(/* webpackChunkName: "materials" */ "../views/Materials.vue"),
  },
  {
    path: "/login",
    name: "Login",
    icon: "mdi-login-variant",
    component: async () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];
