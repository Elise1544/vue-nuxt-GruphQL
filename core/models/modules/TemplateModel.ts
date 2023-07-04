export default (context) => {
  class TemplateModel {
    static getInfo() {
      return 123
    }
  }

  context.$models.template = TemplateModel
}
