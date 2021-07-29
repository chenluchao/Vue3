<template>
  <!-- 组件中的模板结构可以没有根标签 -->
  <h1>个人信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>工作种类：{{person.job.type}}</h2>
  <h2>薪水：{{person.job.salary}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  /* 
    reactive与ref
      * 从定义数据角度对比：
          * ref用来定义：基本数据类型
          * reactive用来定义：对象（或数组）类型数据
          * 备注：ref也可以用来定义对象（或数组）类型数据，它内部会自动通过reactive转为代理对象
      * 从原理角度对比：
          * ref通过Object.defineProperty()的get与set来实现响应式（数据劫持）
          * reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部数据
      * 从使用角度来对比
          * ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value
          * reactive定义的数据，操作数据与读写数据，均不需要.value
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
    return {
      person,
      changeInfo,
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
