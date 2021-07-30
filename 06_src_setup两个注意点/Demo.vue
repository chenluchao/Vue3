<template>
  <!-- 组件中的模板结构可以没有根标签 -->
  <h1>个人信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2 v-show="person.age">年龄：{{person.age}}</h2>
  <button @click="test">测试出发hello事件</button>
  <slot name="test"></slot>
</template>

<script>
  /* 
    setuo两个注意点
        1、setuo执行的时机
            * 在beforeCreate之前执行一次，this是undefined
        2、setup的参数
            * props:值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
            * context:上下文对象
                * attrs：值为对象，包含：组件外部传递过来，单没有在props配置中声明的属性，相当于this.$attrs
                * slots:收到的插槽内容，相当于this.$slots
                * emit:分发自定义事件的函数，相当于this.$emit
  */
import { reactive } from "vue";
export default {
  name: "Demo",
  props:['msg'],//props不声明则传的参数在attrs里面props里面没有，若声明则在props里面，attrs里面没有。
  emits:['hello'],
  setup(props,context) {
    // console.log('----setup----',props)
    console.log('----setup----',context)
    // console.log('----setup----',context.attrs)//相当于vue2的$attrs
    // console.log('----setup----',context.emit)
    console.log('----setup----',context.slots)
    let person = reactive({
      name: "张三",
      age: 18,
    });
    function test(){
      context.emit('hello','666')
    }
    return {
      person,
      test
    };
  },
};
</script>

<style>
</style>
