<template>
  <div class="hello">
    This page creates an axios call with given properties and returns the search
    results all prettified. <br />
    Here is the requested id parameter for the search:
    {{ criteria.id }}
    <p>
      {{ units }}
    </p>
  </div>
  <button @click="changeCriteria">
    This button will change it to 4 bedrooms</button
  ><br />
  <router-link :to="unitDetails"
    >this is using router-link to unit 4</router-link
  >
</template>

<script>
import { getElementData, setElementData } from "../helpers/DataRetriever.js";
import { callUnitSearch } from "../helpers/apiCalls";

setElementData("criteria", "criteria");

export default {
  data() {
    return {
      criteria: getElementData("criteria"),
      units: null,
    };
  },
  watch: {
    criteria: function(val) {
      callUnitSearch(val).then((res)=> {
        this.units = res.data;
      });
    }
  },
  computed: {
    // example of going to another component via route
    unitDetails() {
      return {
        name: "unit-details/:unitName",
        params: {
          unitId: 4,
          unitName: 'my-neck-of-the-woods'
        },
      };
    },
  },
   mounted() {
      callUnitSearch(this.criteria).then((res)=> {
        this.units = res.data;
      });
    },
    methods: {
      changeCriteria() {
        this.criteria = {minbedrooms: true, bedrooms: 4};
      },
  },
};
</script>
