<template>
  <!-- 组件中的模板结构可以没有根标签 -->
  <h1>个人信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工作种类：{{job.type}}</h2>
  <h2>薪水：{{job.salary}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  
  name: 'App',
  // 此处仅测试setup，暂时不考虑响应式
  setup(){
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30K'
    })
    function changeInfo(){
      console.log(name,age,job)
      name.value = '李四',
      age.value = '20'
      // 方式1
      // job.value.type = 'JAVA工程师'
      // job.value.salary = '40K'
      // 方式2
      job.value = {
        type:'全栈工程师',
        salary:'40K'
      }
      /* 
        RefImpl（引用实现对象）
        reference（引用）
        implement（实现）
        ref对基本数据类型用的Object.defineProperty()的get set，对对象类型数据用的是reactive函数封装成proxy代理对象
      */
    }
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
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
