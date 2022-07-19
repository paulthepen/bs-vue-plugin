<template>
  <div :class="positionClass">
    Sidebar
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['options'],
  components: {},
  data() {
    return {};
  },
  computed: {
    positionClass() {
      if (this.options?.header?.honorSidebar) {
        return 'align-self-stretch order-1';
      } else if (this.options?.sidebar?.position == "right") {
        return 'order-3';
      } else {
        return 'order-2';
      }
    },
  },
  methods: {},
};
</script>
