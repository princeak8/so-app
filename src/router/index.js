import { STORAGE_KEY } from "@/constants";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PowerStations from "../views/PowerStations.vue";
import PowerStations2 from "../views/PowerStations2.vue";
import PowerStationsUnits from "../views/PowerStationsUnits.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

export const RouteEnum = Object.freeze({
  LOGIN: { path: "/login", name: "Login" },
  HOME: { path: "/", name: "Home" },
  POWER_STATIONS: { path: "/power_stations", name: "Power_Stations" },
  POWER_STATIONS2: { path: "/power_stations2", name: "Power_Stations2" },
  POWER_STATIONS_UNITS: { path: "/power_stations_units", name: "Power_Stations" },
});

const routes = [
  {
    ...RouteEnum.HOME,
    component: Home,
    beforeEnter(to, from, next) {
      next();
      // const accessToken = localStorage.getItem(STORAGE_KEY);

      // if (accessToken && accessToken !== "undefined") {
      //   next();
      // } else {
      //   next(RouteEnum.LOGIN);
      // }
    },
  },
  {
    ...RouteEnum.POWER_STATIONS,
    component: PowerStations,
    beforeEnter(to, from, next) {
      next();
    },
  },
  {
    ...RouteEnum.POWER_STATIONS2,
    component: PowerStations2,
    beforeEnter(to, from, next) {
      next();
    },
  },

  {
    ...RouteEnum.POWER_STATIONS_UNITS,
    component: PowerStationsUnits,
    beforeEnter(to, from, next) {
      next();
    },
  },
  {
    ...RouteEnum.LOGIN,
    component: Login,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
