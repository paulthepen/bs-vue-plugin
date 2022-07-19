<template>
  <listLayout :display="display">
    <listHeader v-if="display?.header" :options="display?.header">
        <unitFilter options="display?.header?.filter" v-if="display?.header?.filter" />
        <unitSort options="display?.header?.sort" v-if="display?.header?.sort" />
      </listHeader>
      <listSidebar v-if="display?.sidebar" :options="display?.sidebar">
        <unitFilter options="display?.sidebar?.filter" v-if="display?.sidebar?.filter" />
        <unitSort options="display?.sidebar?.sort" v-if="display?.sidebar?.sort" />
      </listSidebar>
      <listContent :display="display">
        <div class="hello">
          <ul v-for="unit in units" :key="unit.id">
            <li>
              <router-link :to="getUnitPage(unit)">{{ unit.Name }}</router-link>
            </li>
          </ul>
        <button @click="changeCriteria">Show 4 bedroom cabins</button><br />
      </div>
      </listContent>
  </listLayout>
</template>

<script>
import {
  getElementData,
  setElementData,
  createUrlSlug,
} from "../helpers/DataRetriever.js";
import listHeader from "../components/layout/ListHeader.vue";
import listContent from "../components/layout/ListContent.vue";
import listLayout from "../components/layout/ListLayout.vue";
import listSidebar from "../components/layout/ListSidebar.vue";
import unitFilter from "../components/unit/UnitFilter.vue";
import unitSort from "../components/unit/UnitSort.vue";
import { callUnitSearch } from "../helpers/apiCalls";

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
  components: { listLayout, listContent, unitFilter, listHeader, unitSort, listSidebar },
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
