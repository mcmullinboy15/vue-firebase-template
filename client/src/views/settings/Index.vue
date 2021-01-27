<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Settings",
  computed: {
    children() {
      return this.$router.options.routes.filter(
        x => x.path == this.$route.matched[0].path
      )[0].children;
    }
  }
};
</script>

<style></style>
