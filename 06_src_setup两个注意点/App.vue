<template>
  <Demo @hello='helloMsg' msg='你好'>
    <template v-slot:test>
      <span>这是slot内容</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from './Demo.vue'
export default {
  name: "App",
  components:{
    Demo
  },
  setup(){
    function helloMsg(value){
      console.log(`你好，你错发了hello事件，我收到的参数是${value}~`)
    }
    return {
      helloMsg
    }
  }
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
