<template>
  <div>
    <button @click="isShow=true">点我弹窗</button>
    <!-- 弹窗 -->
    <teleport to='body'>
      <div class="mask"
           v-if="isShow">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <button @click="isShow=false">关闭按钮</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return {
      isShow,
    };
  },
};
</script>

<style>
.dialog {
  width: 300px;
  height: 300px;
  text-align: center;
  background: green;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
}
</style>