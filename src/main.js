import { createApp } from "vue";
import { initializeRouter, setMetaData } from "./router.js";
import BrightsidePlugin from "./BrightsidePlugin.vue";

const element = document.querySelector("#brightside-plugin");
if (element != undefined) {
  let defaultPage = "unit-search";
  let defaultRoot = "rentals";
  const page = document.querySelector("#brightside-plugin").dataset?.page;
  const root = document.querySelector("#brightside-plugin").dataset?.root;
  const selectedRoot = root != undefined ? root : defaultRoot;
  const selectedPage = page != undefined ? page : defaultPage;
  let fullPath = "/" + selectedRoot + "/" + selectedPage;

  const url = window.location.pathname;
  const urlParts = url.split("/");

  if (urlParts.length > 1 && urlParts[1] == selectedRoot && urlParts[2] != "") {
    fullPath = url;
  }

  const router = initializeRouter(selectedRoot);
  router.beforeEach((to, from, next) => {
    setMetaData(to, from, next);
  });

  const app = createApp(BrightsidePlugin, { path: fullPath });
  app.use(router);
  app.mount("#brightside-plugin");
}
