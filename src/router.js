import { createRouter, createWebHistory } from 'vue-router';
import unitSearch from "./pages/UnitSearch.vue";
import unitDetails from "./pages/UnitDetails.vue";

let pathRoot = "";
export const setRoot = (root) => {
    pathRoot = root;
}

//I think this is the problem. I think it's already created when I set the root
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: pathRoot + '/unit-search',
            component: unitSearch
        },
        {
            path: pathRoot + '/unit-details/:unitId',
            component: unitDetails,
            props: true
        }
    ]
})
