import { createApp } from 'vue';
import {initializeRouter} from './router.js';
import BrightsidePlugin from './BrightsidePlugin.vue';

const pathArray = document.querySelector("#brightside-plugin").dataset.path.split('/');
const pathBase = pathArray[pathArray.length - 1];
const pathRoot = pathArray.length > 1? "/" + pathArray[0]: "";
const router = initializeRouter(pathRoot);

const url = window.location.path.split("/");
if (url.length > 1 && url[0] == "/" + pathRoot) {
    
}

const app = createApp(BrightsidePlugin, {path: pathBase, base: pathRoot});
app.use(router);
app.mount("#brightside-plugin");
