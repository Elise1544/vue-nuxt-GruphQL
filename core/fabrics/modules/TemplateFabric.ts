import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class TemplateFabric {}

  context.$fabrics.template = TemplateFabric
}
