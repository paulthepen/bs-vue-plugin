<template>
  <router-view></router-view>
</template>

<script>
export default {
  props: ['path'],
  beforeMount() {
    this.$router.push(this.path);
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>