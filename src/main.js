import { createApp } from 'vue';
import {router, setRoot} from './router.js';
import BrightsidePlugin from './BrightsidePlugin.vue';

const pathArray = document.querySelector("#brightside-plugin").dataset.path.split('/');
const pathBase = pathArray[pathArray.length - 1];
const pathRoot = pathArray.length > 1? pathArray[0]: "";
setRoot(pathBase);
console.log(pathRoot);
console.log(pathBase);
const app = createApp(BrightsidePlugin, {path: pathBase, root: pathRoot});
app.use(router);
app.mount("#brightside-plugin");
