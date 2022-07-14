<template>
  <div class="hello">
    <ul v-for="unit in units" :key="unit.id">
      <li>
        <router-link :to="getUnitPage(unit)">{{ unit.Name }}</router-link>
      </li>
    </ul>
  </div>
  <button @click="changeCriteria">Show 4 bedroom cabins</button><br />
</template>

<script>
import {
  getElementData,
  setElementData,
  unitNameToSlug,
} from "../helpers/DataRetriever.js";
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
    criteria: function (val) {
      callUnitSearch(val).then((res) => {
        this.units = res.data;
      });
    },
  },
  mounted() {
    callUnitSearch(this.criteria).then((res) => {
      this.units = res.data;
    });
  },
  methods: {
    changeCriteria() {
      this.criteria = { minbedrooms: true, bedrooms: 4 };
    },
    getUnitPage(unit) {
      return {
        name: "unit-details/:unitName",
        params: {
          unitId: unit.Id,
          unitName: unitNameToSlug(unit.Name),
        },
      };
    },
  },
};
</script>
