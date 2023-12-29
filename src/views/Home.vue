<template>
  <div class="home">
    <HcHeader />
    <div class="components">
      <RouterView />
    </div>
  </div>
</template>

<script>
import HcHeader from "@/components/layout/HcHeader";
export default {
  name: "MatchIndex",
  title: "网站首页",
  props: {
    msg: String,
  },
  components: {
    HcHeader,
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  .components {
    width: 1400px;
    margin: 0 auto;
    padding-top: 40px;
  }
}
</style>
