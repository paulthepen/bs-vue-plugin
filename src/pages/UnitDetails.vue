<template>
  <div>
    This page shows the details for unit {{ unitData?.Id }}
    <div style="width: 100%; text-align: center">
      {{ unitData?.Name }}
    </div>
  </div>
</template>

<script>
import { callUnitDetails } from "../helpers/apiCalls";

export default {
  props: ["unitId", "unitName"],
  components: {},
  data() {
    return {
        unitData: {}
    };
  },
  computed: {},
  methods: {},
  beforeMount() {
    callUnitDetails(this.unitId).then((res) => {
      this.unitData = res.data;
    });
  },
};
</script>
