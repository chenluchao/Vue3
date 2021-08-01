<template>
  <div class="child">
    <h3>我是Child组件（子）</h3>
    <Son></Son>
  </div>
</template>

<script>
  import Son from './Son.vue';
export default {
  name:'Child',
  components:{
    Son
  }
}
</script>

<style>
.child{
  background: skyblue;
  text-align: center;
  padding: 10px 20px;
}
</style>