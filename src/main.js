import { defineCustomElement } from 'vue';
import App from './App.ce.vue';
const BrightsidePlugin = defineCustomElement(App);

customElements.define('brightside-plugin', BrightsidePlugin);

