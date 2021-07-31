<template>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪水：{{job.j1.salary}}</h2>
  <h4>当前x值为：{{x.y}}</h4>
  <button @click="name+='~'">修改名称</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="x={y:888}">点击替换x</button>
</template>

<script>
/* 
  shallowReactive和shallowRef
    * shallowReactive:只处理对象最外层属性的响应式（浅响应式）
    * shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理
    * 什么时候使用
        * 如果一个对象数据结构不叫深，单变价时只有最外层属性变化===>shallowReactive
        * 如果一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换===>shallowRef


*/
import { reactive, ref, shallowReactive, shallowRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // let person = shallowReactive({
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    let x = ref({
      y:0
    })
    return {
      person,
      x,
      ...toRefs(person)
    };
  },
};
</script>

<style>
</style>
