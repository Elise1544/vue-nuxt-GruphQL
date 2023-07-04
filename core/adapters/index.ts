import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import TemplateAdapter from '@/core/adapters/modules/TemplateAdapter.ts'

const adapterList: coreFunctionList = [TemplateAdapter]

export default (context: nuxtContext) => {
  class AdaptersLocator {}
  context.$adapters = new AdaptersLocator()
  adapterList.forEach((fn) => fn(context))
}
