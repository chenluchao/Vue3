<template>
  <h1>当前求和为：{{sum}}</h1>
  <button @click="sum++">点击+1</button>
  <hr>
  <h2>当前点击坐标为：x:{{point.x}},y:{{point.y}}</h2>
</template>

<script>
import { ref } from "vue";
// 引入打点Hooks
import usePoint from './hooks/usePoint'
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let point = usePoint()
    return {
      sum,
      point
    };
  },
};
</script>

<style>
</style>
