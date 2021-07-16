<template>
  <div>
    <h1>Login</h1>
<el-button @click="goHome">回到首页</el-button>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    goHome() {
      this.$router.push("/welcome");
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
