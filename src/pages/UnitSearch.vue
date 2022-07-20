<template>
  <listLayout :display="display">
    <template v-slot:sidebar>
      <listSidebar v-if="display?.sidebar" :options="display" :class="sideBarClass">
        <unitFilter options="display?.sidebar?.filter" v-if="display?.sidebar?.filter" />
        <unitSort options="display?.sidebar?.sort" v-if="display?.sidebar?.sort" />
      </listSidebar>
    </template>
    <template v-slot:header>
      <listHeader v-if="display?.header" :options="display?.header" class="order-1">
        <unitFilter options="display?.header?.filter" v-if="display?.header?.filter" />
        <unitSort options="display?.header?.sort" v-if="display?.header?.sort" />
      </listHeader>
    </template>
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
import listSidebar from "../components/layout/ListSidebar.vue";
import listHeader from "../components/layout/ListHeader.vue";
import unitFilter from "../components/unit/UnitFilter.vue";
import unitSort from "../components/unit/UnitSort.vue";


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
  components: { listLayout, listSidebar, listHeader, unitFilter, unitSort },
  watch: {
    criteria: function (val) {
      callUnitSearch(val).then((res) => {
        this.units = res.data;
      });
    },
  },
  computed: {
    sideBarClass() {
      return {
        'order-1': this.display?.header?.honorSidebar && this.display?.sidebar?.position != 'right',
        'order-2': !this.display?.header?.honorSidebar && this.display?.sidebar?.position != 'right',
        'order-3': this.display?.sidebar?.position == 'right',
      }
    }
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
  }
};
</script>
