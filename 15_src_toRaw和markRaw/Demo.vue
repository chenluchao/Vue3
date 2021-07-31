<template>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪水：{{job.j1.salary}}</h2>
  <h2>座驾：{{person.car}}</h2>
  <button @click="name+='~'">修改名称</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出原始数据</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="person.car.price++">换价格</button>
</template>

<script>
/* 
  toRaw和markRaw
    * toRaw
      * 作用：将一个由 `reactive` 生成的响应式对象转为普通对象
      * 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
    * markRaw 
      * 作用：标记一个对象，使其永远不会再成为响应式对象,只是不响应但是数据可以修改。
      * 应用场景
        * 有些值不应被设置为响应式的，例如复杂的第三方类库等
        * 当前渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能
*/
import { reactive, toRefs,toRaw, ref, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum =ref(0)
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    function showRawPerson(){
      const p = toRaw(person)
      console.log(p)
    }
    function addCar(){
      let car = {
        name:'奔驰',
        price:40
      }
      person.car = markRaw(car)
    }
    return {
      ...toRefs(person),
      sum,
      person,
      showRawPerson,
      addCar
    };
  },
};
</script>

<style>
</style>
