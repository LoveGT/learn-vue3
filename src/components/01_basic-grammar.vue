<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-07 15:20:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-07 17:01:13
-->
<template>
  <div>
    <div v-html="message"></div>

    <h2 v-if="flag" class="h2-h">布尔值</h2>
    <el-button type="primary" @click="handleShowFn">click</el-button>

    <p :style="'color:' + ost.pColor">
      <span>{{ost.pNum }}<span v-show="ost.pShow">显示</span></span>
    </p>

    <p>{{ shallowr.name }}</p>
    <p>{{ shallowr.friends.name }}</p>

    <p>{{msgs}}</p>
    <p>{{msgs2}}</p>
    <el-button type="primary" @click="onChange">click</el-button>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
const message: string = '<h1>我是真男人</h1>'

let flag = ref<Boolean>(false)
const colors = ref<String>('deepskyblue')
const handleShowFn = () => {
  flag.value = !flag.value
  colors.value = 'deeppink'
  ost.pColor = 'red'
  shallowr.value = {
    name: 'gaotao',
    friends: {
      name: 'kobe',
      age: 30
    }
  }
  // shallowr.value.name = '2'
  // shallowr.value.friends.name = 'gaoao'
  // triggerRef(shallowr)
}

interface IStyles {
  pColor: string
  pShow: boolean
  pNum: number
}
let ost = reactive<IStyles>({
  pColor: 'green',
  pShow: true,
  pNum: 666
})

let shallowr = shallowRef({
  name: '123',
  friends: {
    age: 16,
    name: 'gaotao'
  }
})

const nums = ref<String | Number>(1)
const msg: Ref<string> = ref('11111')

// customRef的使用
const myRef = <T>(value: T) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal: T) {
        value = newVal
        trigger()
      }
    }
  })
}
const msgs = myRef<String>('我是你爸爸')
const msgs2 = myRef<any>('12')
const onChange = () => {
  msgs.value = "haha,是吧"
  msgs2.value++
}
watch([msgs, msgs2], ([newVal, newVal2],[oldVal, oldVal2]) => {
  console.log('watch1', newVal, oldVal)
  console.log('watch2', newVal2, oldVal2)
}, {
  deep: true,//ref 深层次监听不到 需要开启才可监听，并且old值和改变后的值一样（bug）
  immediate: false//初始加载执行
})
</script>

<style scoped>
  .h2-h {
    color: v-bind(colors)
  }
</style>