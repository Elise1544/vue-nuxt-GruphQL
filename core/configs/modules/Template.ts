import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class Template {}

  context.$configs.template = Template
}
