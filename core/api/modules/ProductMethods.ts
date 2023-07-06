import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class ProductMethods {
    private static endpoints = context.$configs.endpoints

    async getProducts(params = {}) {
      const config = ProductMethods.endpoints.product.getProducts(params)

      console.log(context.$services.useAPI)

      const result = await context.$services.useAPI.request({ config })

      return result
    }
  }

  context.$api.product = new ProductMethods()
}
