import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import TemplateModel from '@/core/models/modules/TemplateModel.ts'

const modelList: coreFunctionList = [TemplateModel]

export default (context: nuxtContext) => {
  class ModelsLocator {}
  context.$models = new ModelsLocator()
  modelList.forEach((fn) => fn(context))
}
