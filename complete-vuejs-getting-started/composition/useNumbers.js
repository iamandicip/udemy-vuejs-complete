import { ref, reactive, computed, watch, watchEffect } from 'vue'

export function useNumbers() {

  const a = ref(0)
  const b = ref(0)
  const history = ref([])

  const total = computed(() => {
    return a.value + b.value
  })

  watch([a, b], ([newA, newB], [oldA, oldB]) => {
    if(newA != oldA) {
      // for ref we use value
      history.value.push(`A: ${oldA} -> ${newA}`)
    }

    if(newB != oldB) {
      history.value.push(`B: ${oldB} -> ${newB}`)
    }
  })

  return {a, b, history, total}
}


// /users/:id
// watch is more specific, you need to pass what you are going to watch
// watch(total, (newVal) => {
//   console.log(newVal);
// }, {
//   immediate: true
// })

// watchEffect is more general, it can watch anything
// watchEffect(() => {
//   console.log(numbers.a);
// })