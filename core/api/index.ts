import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import TemplateMethods from '@/core/api/modules/TemplateMethods.ts'

const apiList: coreFunctionList = [TemplateMethods]

export default (context: nuxtContext) => {
  class ApiLocator {}
  context.$api = new ApiLocator()
  apiList.forEach((fn) => fn(context))
}
