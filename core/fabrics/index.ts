import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import TemplateFabric from '@/core/fabrics/modules/TemplateFabric.ts'

const fabricList: coreFunctionList = [TemplateFabric]

export default (context: nuxtContext) => {
  class FabricsLocator {}
  context.$fabrics = new FabricsLocator()
  fabricList.forEach((fn) => fn(context))
}
