<template>
  <div class="child">
    <h3>我是Child组件</h3>
    {{sum}}
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: "Child",
  setup(){
    let sum = ref(0)
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(sum)
      },3000)
    })
  }
};
</script>

<style>
.child {
  background: skyblue;
  text-align: center;
  padding: 10px 20px;
}
</style>