<template>
  <router-view></router-view>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: false,
      default: "unit-search",
      validator(value) {
        const paths = ["unit-search", "unit-details"];
        return paths.includes(value);
      },
    },
    root: {
      type: String,
      required: false,
      default: ""
    },
  },
  beforeMount() {
    console.log(this.root);
    if (this.path == 'unit-details') {
        this.$router.push(this.root + '/unit-details');
    } else if (this.path == 'unit-search') {
        this.$router.push(this.root + '/unit-search');
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>