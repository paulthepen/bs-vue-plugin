<template>
  <listLayout :display="display">
          <ul v-for="unit in units" :key="unit.id">
            <li>
              <router-link :to="getUnitPage(unit)">{{ unit.Name }}</router-link>
            </li>
          </ul>
        <button @click="changeCriteria">Show 4 bedroom cabins</button><br />
  </listLayout>
</template>

<script>
import {
  getElementData,
  setElementData,
  createUrlSlug,
} from "../helpers/DataRetriever.js";
import { callUnitSearch } from "../helpers/apiCalls";
import listLayout from '../components/layout/ListLayout.vue';
setElementData("criteria", "criteria");
setElementData("display", "display");

export default {
  data() {
    return {
      criteria: getElementData("criteria"),
      display: getElementData("display"),
      units: null,
    };
  },
  components: { listLayout },
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
          unitName: createUrlSlug(unit.Name),
        },
      };
    },
  },
};
</script>
