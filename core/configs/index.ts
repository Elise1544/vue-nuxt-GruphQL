import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import Endpoints from '~/core/configs/modules/EndPoints.ts'
import Enums from '~/core/configs/modules/Enums.ts'

const configList: coreFunctionList = [Endpoints, Enums]

export default (context: nuxtContext) => {
  class ConfigLocator {}
  context.$configs = new ConfigLocator()
  configList.forEach((fn) => fn(context))
}
