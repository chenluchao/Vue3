<template>
  <!-- 组件中的模板结构可以没有根标签 -->
  <h1>个人信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import {h} from 'vue';
export default {
  
  name: 'App',
  // 此处仅测试setup，暂时不考虑响应式
  setup(){
    let name = '张三'
    let age = 18
    // 方法
    function sayHello(){
      alert(`我是${name},我${age}岁了~`)
    }
    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    }
    // 返回一个渲染函数
    // return ()=>{return h('h1','渲染函数')}
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
