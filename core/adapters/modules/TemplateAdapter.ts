import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class TemplateAdapter {}

  context.$adapters.template = TemplateAdapter
}
