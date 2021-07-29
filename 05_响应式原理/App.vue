<template>
  <!-- 组件中的模板结构可以没有根标签 -->
  <h1>个人信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2 v-show="person.age">年龄：{{person.age}}</h2>
  <h2 v-show="person.sex">性别：{{person.sex}}</h2>
  <h2>工作种类：{{person.job.type}}</h2>
  <h2>薪水：{{person.job.salary}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个属性</button>
  <button @click="deleteAge">删除一个属性</button>
</template>

<script>
  /* 
    响应原理
      vue2.x的响应式
        * 实现原理：通过Object.defineProperty()对属性的读取，修改进行拦截（数据劫持）
        * 数据类型：通过写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）
          Object.defineProperty(data,'count',{
            get(){},
            set(){}
          })
        存在问题：
          新增属性，删除属性，界面不更新
          直接通过下标修改数组，界面不会自动更新
      Vue3的响应式
        * 实现原理：
          通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写，属性的添加。属性的删除等
          通过Reflect(反射)：对呗代理对象的属性进行操作
  */
import { reactive } from "vue";
export default {
  name: "App",
  // 此处仅测试setup，暂时不考虑响应式
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30K",
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });
    function changeInfo() {
      person.name = "李四";
      person.age = 20;
      person.job = {
        type: "UI工程师",
        salary: "40K",
      };
      person.hobby[0] = "学习";
    }
    function addSex(){
      person.sex = '男'
    }
    function deleteAge(){
      delete person.age
    }
    return {
      person,
      changeInfo,
      addSex,
      deleteAge
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
