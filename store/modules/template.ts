import { defineStore } from 'pinia'
import { Ref } from 'vue'

export default defineStore('template', () => {
  const test = ref(123)

  return {
    test
  }
})
