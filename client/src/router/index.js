import Vue from "vue";
import VueRouter from "vue-router";
import { config } from "../config";

import { auth } from "../firebase";

Vue.use(VueRouter);

const routes = [
  { path: "*", component: () => import("../views/NotFoundComponent.vue") },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: () => import("../views/Notifications.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/settings",
    component: () => import("../views/settings/Index.vue"),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "/",
        name: "Main",
        component: () => import("../views/settings/Main.vue"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/support",
        name: "Support",
        component: () => import("../views/settings/Support.vue"),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  // Updates the title to the Name of the Component you're navigating to
  document.title = to.name + ` - ${config.projectName}`;

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
