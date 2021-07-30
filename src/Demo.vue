<template>
  <h1>个人信息</h1>
  <h2>姓：<input type="text"
           v-model="person.firstName"></h2>
  <h2>名：<input type="text"
           v-model="person.lastName"></h2>
  <h2><span>全名：{{person.fullName}}</span></h2>
  全名：<input type="text"
         v-model="person.fullName">
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    // 计算属性-简写（没有考虑计算属性被修改的情况）
    // person.fullName = computed(()=>{
    //   return person.firstName+'-'+person.lastName
    // })
    // 计算属性-完整写法（考虑读和写）
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        let nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });
    return {
      person,
    };
  },
};
</script>

<style>
</style>
