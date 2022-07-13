import { createRouter, createWebHistory } from "vue-router";
import unitSearch from "./pages/UnitSearch.vue";
import unitDetails from "./pages/UnitDetails.vue";

//I think this is the problem. I think it's already created when I set the root
export const initializeRouter = (pathRoot) => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: pathRoot + "/unit-search",
        component: unitSearch,
      },
      {
        path: pathRoot + "/unit-details/:unitId",
        component: unitDetails,
        props: true,
      },
    ],
  });
};
