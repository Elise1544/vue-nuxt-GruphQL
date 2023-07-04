import { nuxtContext } from '@nuxt/types'

import BaseContainer from '@/packages/basis/components/BaseContainer.vue'
import BaseSection from '@/packages/basis/components/BaseSection.vue'
import BaseCol from '@/packages/basis/components/BaseCol.vue'
import BaseRow from '@/packages/basis/components/BaseRow.vue'
import BaseLayout from '@/packages/basis/components/BaseLayout.vue'
import BaseLink from '@/packages/basis/components/BaseLink.vue'
import BaseIcon from '@/packages/basis/components/BaseIcon.vue'

const basisComponents = [
  { name: 'VContainer', component: BaseContainer },
  { name: 'VSection', component: BaseSection },
  { name: 'VCol', component: BaseCol },
  { name: 'VRow', component: BaseRow },
  { name: 'VLayout', component: BaseLayout },
  { name: 'VLink', component: BaseLink },
  { name: 'VIcon', component: BaseIcon }
]

export default defineNuxtPlugin((context: nuxtContext) => {
  basisComponents.forEach((packageItem) => {
    context.vueApp.component(packageItem.name, packageItem.component)
  })
})
