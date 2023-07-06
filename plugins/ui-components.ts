import { nuxtContext } from '@nuxt/types'

import VSlider from '@/components/UI/VSlider.vue'

const UIComponents = [{ name: 'VSlider', component: VSlider }]

export default defineNuxtPlugin((context: nuxtContext) => {
  UIComponents.forEach((uiItem) => {
    context.vueApp.component(uiItem.name, uiItem.component)
  })
})
