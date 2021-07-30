<template>
  <h1>当前求和为：{{sum}}</h1>
  <h1>当前信息为：{{msg}}</h1>
  <button @click="sum++">点击+1</button>
  <br>
  <br>
  <button @click="msg+='!'">修改信息</button>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪水：{{person.job.j1.salary}}</h2>
  <button @click="person.name+='~'">修改名称</button>
  <br>
  <br>
  <button @click="person.age++">修改年龄</button>
  <br>
  <br>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
  /* 
    watchEffect函数
      * watch的套路是：既要指明监视的属性，也要指明监视的回调
      * watchEffect的套路是：不用指明监视那个属性，监视的回调中用到哪个属性，那就监视哪个属性
      * watchEffect有点像computed:
        * 单computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值
        * 而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值
  */
import { ref,reactive, watch,watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    // 监视
    /* watch(sum,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
    },{immediate:true}) */
    
    watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect所指定的回调执行了')
    })
    return {
      sum,
      msg,
      person
    };
  },
};
</script>

<style>
</style>
