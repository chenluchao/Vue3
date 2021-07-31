<template>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪水：{{job.j1.salary}}</h2>
  <button @click="name+='~'">修改名称</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
  /* 
    readonly和shallowReadonly
      * readonly只读不允许修改数据
      * shallowReadonly最外层数据只读，不允许修改。里面层次可以修改。
  */
import { ref,reactive, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0)
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    // person = readonly(person)
    // person = shallowReadonly(person)
    return {
      sum,
      ...toRefs(person)
    };
  },
};
</script>

<style>
</style>
