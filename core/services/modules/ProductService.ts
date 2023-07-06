import { nuxtContext } from '@nuxt/types'
import { IProduct } from '@/types/ProductInterface.ts'

export default (context: nuxtContext) => {
  class ProductService {
    private static ProductMethods = context.$api.product

    private static ProductAdapters = context.$adapters.product

    private static products: any = {}

    setProducts(code: string, products: IProduct[]) {
      if (!ProductService.products[code]) {
        ProductService.products[code] = products
      }
    }

    async getProducts(params: any = {}) {
      const result = (await ProductService.ProductMethods.getProducts({ ...params, _limit: 10 })) || []

      if (!result.length) return []

      console.log(result)

      const mappedResult = ProductService.ProductAdapters.getProducts(result).map((ProductModel: IProduct) =>
        ProductModel.toObject()
      )

      this.setProducts(params.code, mappedResult)

      return mappedResult
    }
  }

  context.$services.product = new ProductService()
}
