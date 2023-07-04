import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import TemplateService from '@/core/services/modules/TemplateService.ts'

const serviceList: coreFunctionList = [TemplateService]

export default (context: nuxtContext) => {
  class ServicesLocator {}
  context.$services = new ServicesLocator()
  serviceList.forEach((fn) => fn(context))
}
