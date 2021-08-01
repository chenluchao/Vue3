<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import { ref,customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义ref
    function myRef(value,delay){
      let timer
      return customRef((track,trrigger)=>{
        return {
          get(){
            track()//通知vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
            return value
          },
          set(newValue){
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue
              trrigger()//通知vue去重新解析模板
            },delay)
          }
        }
      })
    }
    // let keyWord = ref('hello')//使用vue内置的ref
    let keyWord = myRef('hello',500)//使用程序员自定义ref
    return {
      keyWord
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
