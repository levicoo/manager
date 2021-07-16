<template>
  <div>
    <h1>Home</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import Welcome from './Welcome/index.vue'
export default {
  name: "Home",
  components:{
    Welcome
  }
};
</script>
<style lang="scss" scoped>
</style>
