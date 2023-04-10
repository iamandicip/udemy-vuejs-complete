<template>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <div 
    v-for="number in history"
    :key="number"
    >
      {{ number }}
    </div>
</template>

<script>

import {useNumbers} from './useNumbers'

export default {
  setup() {
    // ref is used for primitive values and arrays
    // const count = ref(0)
    // const increment = () => {
    //   count.value++
    // }

    // reactive is used for objects
    // const numbers = reactive({
    //   a: 1, 
    //   b: 2
    // })

    // const {
    //   a, b, total, history
    // } = useNumbers();

    // return {
    //   a,
    //   b,
    //   history,
    //   count,
    //   increment,
    //   total
    // }

    return useNumbers()
  }
}
</script>

<style scoped>
p {
  font-size: 40px;
}
button {
  height: 100px;
  width: 100px;
  font-size: 40px;
}
</style>