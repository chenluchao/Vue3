<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style>
.app {
  background: gray;
  text-align: center;
  padding: 10px 20px;
}
</style>