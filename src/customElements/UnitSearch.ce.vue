<template>
  <div class="hello">
    This page creates an axios call with given properties and returns the search results all prettified. <br />
    Here is the requested minimum bedrooms parameter for the search: {{criteria.minbedrooms}}
  </div>
  <button @click="changeCriteria">This button will change it to 4 bedrooms</button>
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
      units: apiCall('demo.bookonthebrightside.com/rm4/json/unitsearch.php?minbedrooms=' + this.criteria.minbedrooms)
      }
  },
  methods: {
    changeCriteria() {
      this.criteria.minbedrooms = 4;
    }
  }
}
</script>
