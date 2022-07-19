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
      return this.options?.position == "right"? 'order-3' : 'order-2';
    }
  },
  methods: {},
};
</script>
