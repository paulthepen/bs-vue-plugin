<template>
  <div class="hello">
    This page creates an axios call with given properties and returns the search results all prettified. <br />
    Here is the requested minimum bedrooms parameter for the search: {{criteria.minbedrooms}}
  </div>
  <button @click="goToDetails">This goes to Unit Search</button><br />
  <button @click="changeCriteria">This button will change it to 4 bedrooms</button><br />
  <router-link to="/unit-details/4">this is using router-link to unit 4</router-link>
</template>

<script>
import {getElementData, setElementData} from '../helpers/DataRetriever.js';

if (typeof criteria !== 'undefined') {
  setElementData('criteria', criteria);
}

export default {
  data() {
    return {
      criteria: getElementData('criteria'),
      // units: unitSearchApi(criteria);
      }
  },
  methods: {
    changeCriteria() {
      this.criteria.minbedrooms = 4;
    },
    goToDetails() {
      this.$router.push('/unit-details');
    }
  }
}
</script>
