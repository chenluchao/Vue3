<template>
  <h1>个人信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
    });
    return {
      person,
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
