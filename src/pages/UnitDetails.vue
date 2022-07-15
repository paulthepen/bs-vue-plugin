<template>
  <div>
    This page shows the details for unit {{ unitData?.Id }}
    <div style="width: 100%; text-align: center">
      {{ unitData?.Name }}
    </div>
  </div>
</template>

<script>
import { callUnitDetails, callUnitSearch } from "../helpers/apiCalls";
import { createUrlSlug } from "@/helpers/DataRetriever";

export default {
  props: {
    unitId: String, unitName: String
  },
    components: {},
    data() {
      return {
        unitData: {},
      };
    },
    computed: {},
    methods: {},
    mounted() {
      let unitId = this.unitId;
      if (!unitId) {
        callUnitSearch().then((res) => {
          const matchingUnit = res.data.find((unit) => {
            return createUrlSlug(unit.Name) == this.unitName;
          });
          unitId = matchingUnit.Id;
          callUnitDetails(unitId).then((res) => {
            this.unitData = res.data;
          });
        });
      } else {
        callUnitDetails(this.unitId).then((res) => {
          this.unitData = res.data;
        });
      }
    },
};
</script>
