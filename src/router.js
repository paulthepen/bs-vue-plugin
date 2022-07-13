import { createRouter, createWebHistory } from "vue-router";
import unitSearch from "./pages/UnitSearch.vue";
import unitDetails from "./pages/UnitDetails.vue";

const pages = [
  {
    name: "unit-search",
    component: unitSearch,
    meta: { 
        title: "Search for a Cabin!",
        metaTags: [{
            name: 'description',
            content: 'Search for a cabin'
        },
        {
            property: 'og:description',
            content: 'Search for a cabin'
        },
    ]
    },
  },
  { name: "unit-details/:unitName", component: unitDetails },
];
//TODO: it would be nice to find a way to go to unit-details/id and end up at unit-details/unit-name

export const initializeRouter = (pathRoot) => {
  const routes = [];

  for (let page in pages) {
    routes.push({
      path: "/" + pathRoot + "/" + pages[page].name,
      name: pages[page].name,
      component: pages[page].component,
      meta: pages[page].meta,
      props: true,
    });
  }

  return createRouter({
    history: createWebHistory(),
    routes: routes,
  });
};

export const setMetaData = (to, from, next) => {
    const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);
    const nearestWithMeta = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.metaTags);

    if (nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
    }

    Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
      (el) => el.parentNode.removeChild(el)
    );
    if (!nearestWithMeta) {
      return next();
    }

    nearestWithMeta.meta.metaTags
      .map((tagDef) => {
        const tag = document.createElement("meta");

        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
        });

        tag.setAttribute("data-vue-router-controlled", "");

        return tag;
      })

      .forEach((tag) => document.head.appendChild(tag));
    next();
}
