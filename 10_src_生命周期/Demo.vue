<template>
  <h1>当前求和为：{{sum}}</h1>
  <button @click="sum++">点击+1</button>
  <br>
  <br>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    // 通过组合式api的形式使用生命周期钩子
    /* 
      如果组合式和配置项都存在那么组合式api的调用时机要比配置项优先
    */
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    return {
      sum,
    };
  },
  // 通过配置项的形式使用声明周期钩子
  //#region
  /* beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  beforeUnmount(){
    console.log('beforeUnmount')
  },
  unmounted(){
    console.log('unmounted')
  } */
  //#endregion
};
</script>

<style>
</style>
