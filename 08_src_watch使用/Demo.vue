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
import { ref,reactive, watch } from "vue";
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
    // ===============================================================================================
    // 监听:情况一：监听ref所定义的一个响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log("sum变了~~", "新值：" + newValue, "旧值：" + oldValue);
    },{immediate:true}); */
    // watch(msg, (newValue, oldValue) => {
    //   console.log("msg变了~~", "新值：" + newValue, "旧值：" + oldValue);
    // });
    // ===============================================================================================
    // 监听:情况二：监听ref所定义的多个响应式数据
    // 写法1
    /* watch([sum,msg], (newValueArr, oldValueArr) => {
      console.log("sum变了~~", "新值：" + newValueArr, "旧值：" + oldValueArr);
    },{immediate:true}); */
    // 写法2
    /* watch([sum,msg], ([newSum,newMsg],[oldSum,oldMsg]) => {
      console.log("sum变了~~", "新值：" + newSum, "旧值：" + oldSum);
      console.log("msg变了~~", "新值：" + newMsg, "旧值：" + oldMsg);
    },{immediate:true}) */
    // ===============================================================================================
    // 监听：情况三：监听reactive所定义的一个响应式数据
    /* 注意：
        此处无法正确的获取oldValue
        强制开启了deep无法关闭
    */
    /* watch(person,(newValue, oldValue)=>{
      console.log('person变化了~',newValue,oldValue)
    }) */
    // ===============================================================================================
    /* 
      监听：情况四：监视reactive所定义的一个响应式数据中的某个属性
    */
    /* watch(()=>person.age,(newValue, oldValue)=>{
      console.log('person的年龄变化了~',newValue,oldValue)
    }) */
    // ===============================================================================================
    /* 
      监听：情况五：监视reactive所定义的一个响应式数据中的某些属性
    */
    /* watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了~',newValue,oldValue)
    },{deep:true}) */
    // ===============================================================================================
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
