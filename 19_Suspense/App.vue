<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
  /* 
    Suspense
      * 等待异步组件时渲染一些额外内容，让用户有更好的用户体验
      * 使用步骤
        * 异步引入组件
            import {defineAsyncComponent} from 'vue';
            const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
        * 使用Suspense包裹组件，并配置好default和fallback
            <Suspense>
              <template v-slot:default>
                <Child></Child>
              </template>
              <template v-slot:fallback>
                <h3>加载中...</h3>
              </template>
            </Suspense>
  */
// import Child from "./components/Child.vue";//静态引入
import {defineAsyncComponent} from 'vue';
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))//动态（异步）引入
export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style>
.app {
  background: gray;
  text-align: center;
  padding: 10px 20px;
}
</style>