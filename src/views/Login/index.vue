<template>
  <div>
    <h1>Login</h1>
    <el-button @click="goHome">回到首页</el-button>
  </div>
</template>
<script>
export default {
  name: "Login",
  mounted() {
    this.$request({
      method: "get",
      url: "/login",
      data: {
        name: "jack",
      },
    }).then((res) => {
      console.log(res);
    });
  },
  methods: {
    goHome() {
      this.$router.push("/welcome");
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
