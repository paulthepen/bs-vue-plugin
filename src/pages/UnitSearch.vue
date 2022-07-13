<template>
  <div class="hello">
    This page creates an axios call with given properties and returns the search
    results all prettified. <br />
    Here is the requested minimum bedrooms parameter for the search:
    {{ criteria.minbedrooms }}
  </div>
  <button @click="changeCriteria">
    This button will change it to 4 bedrooms</button
  ><br />
  <!-- <router-link :to="unitDetails"
    >this is using router-link to unit 4</router-link
  > -->
</template>

<script>
import { getElementData, setElementData } from "../helpers/DataRetriever.js";

if (typeof criteria !== "undefined") {
  setElementData("criteria", criteria);
}

export default {
  data() {
    return {
      criteria: getElementData("criteria"),
      id: 4,
      unitName: "my-neck-of-the-woods"
      // units: unitSearchApi(criteria);
    };
  },
  computed: {
    // example of going to another component via route
    // unitDetails() {
    //   return {
    //     name: "unit-details/:unitName",
    //     params: {
    //       unitId: this.id,
    //       unitName: this.unitName
    //     },
    //   };
    // },
  },
  methods: {
    changeCriteria() {
      this.criteria.minbedrooms = 4;
    },
  },
};
</script>
