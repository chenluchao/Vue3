<template>
  <Demo v-if="isShowDemo"></Demo>
  <hr>
  <button @click="isShowDemo=!isShowDemo">显示/隐藏组件</button>
</template>

<script>
import { ref } from "vue";
import Demo from "./Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let isShowDemo = ref(true);
    return {
      isShowDemo,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
