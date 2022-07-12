import { defineCustomElement } from 'vue';
import unitSearch from './customElements/UnitSearch.ce.vue';

const unitSearchComponent = defineCustomElement(unitSearch);

customElements.define('brightside-unit-search', unitSearchComponent);