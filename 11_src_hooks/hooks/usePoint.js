import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function() {
  let point = reactive({
    // 实现鼠标打点相关数据
    x: 0,
    y: 0,
  })
  // 实现鼠标打点相关方法
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(point)
  }
  // 实现鼠标打点相关钩子周期
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })
  return point
}
