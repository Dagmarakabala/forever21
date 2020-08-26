import $ from 'jquery';

const ProductViewInfo = {
  init() {
      this.catchDOM();
      this.bindEvents();
    },
  catchDOM() {
    this.product = $('.productViewInfo');
  },
  bindEvents() {
    this.product.find('.productViewInfo__size').on("click", this.toggleProductSize.bind(this));
    this.product.find('.productViewInfo__sizeText').on("click", this.toggleProductSizeGuide.bind(this));
    this.product.find('.productViewInfo__infoTitle').on("click", this.toggleProductInfo.bind(this));
  },
  toggleProductSize(event) {
    const $currentProductSize = $(event.currentTarget);
    const $productSizeAll = this.product.find(".productViewInfo__size");
    $productSizeAll.removeClass('-selectSize');
    $currentProductSize.addClass('-selectSize');
  },
  toggleProductSizeGuide(event) {
    const $currentProductSizeGuide = $(event.currentTarget);
    const $sizeBox = this.product.find(".productViewInfo__sizeBox");
    const $sizeGuide = this.product.find(".productViewInfo__sizeGuide");
    switch ($currentProductSizeGuide[0].attributes[1].value) {
      case 'sizeguide' : 
        $sizeBox.addClass('-displaynone');
        $sizeGuide.removeClass('-displaynone');
        break;
      case 'selectsize' :
        $sizeBox.removeClass('-displaynone');
        $sizeGuide.addClass('-displaynone');
        break;
      default:
        break;
    }
  },
  toggleProductInfo(event) {
    const $currentProductInfoTitle = $(event.currentTarget);
    const $productInfoTitleAll = this.product.find(".productViewInfo__infoTitle");
    const $infoSection = this.product.find(".productViewInfo__infoSection");
    $productInfoTitleAll.removeClass('-selectInfo');
    $currentProductInfoTitle.addClass('-selectInfo');
    switch ($currentProductInfoTitle[0].attributes[1].value) {
      case 'details':
        $infoSection.text('Text about product');
        break;
      case 'shopping':
        $infoSection.text('Text about shopping & returns Text about shopping & returns Text about shopping & returns Text about shopping & returns');
        break;
      case 'designer':
        $infoSection.text('Text about designer');
        break;
      default:
        break;
    }
  }

};
export default ProductViewInfo;