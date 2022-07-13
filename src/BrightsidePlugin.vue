<template>
  <router-view></router-view>
</template>

<script>
export default {
  props: ['path', 'base'],
  beforeMount() {
    if (this.path == 'unit-details') {
        this.$router.push(this.base + '/unit-details');
    } else if (this.path == 'unit-search') {
        this.$router.push(this.base + '/unit-search');
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>