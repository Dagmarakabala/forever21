import $ from 'jquery';

const Products = {
  init() {
      this.catchDOM();
      if(this.productsWidget.length > 0)
        this.bindEvents();
    },
  catchDOM() {
    this.productsWidget = $('.products');
  },
  bindEvents() {
    this.productsWidget.find('.productsBar__item').on("click", this.toggleProductsListItem.bind(this));
  },
  toggleProductsListItem(event) {
    const currentProductsBarItem = $(event.currentTarget);
    const productsBarAll = this.productsWidget.find(".productsBar__item");
    productsBarAll.removeClass('-active');
    currentProductsBarItem.addClass('-active');
    const currentProductsBarItemType = currentProductsBarItem.data("type");
    const productsList = this.productsWidget.find('.productsList');
    const productsListElementAll = productsList.find(".productsList__item");
    const productsListElement = productsListElementAll.not("[data-type='" + currentProductsBarItemType + "']");
    productsListElementAll.removeClass('-none');
    productsListElement.addClass('-none');
    if (currentProductsBarItemType == " ") {
      productsListElementAll.removeClass('-none');
    }
  }
};
export default Products;