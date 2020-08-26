import 'babel-polyfill';
import $ from 'jquery';

import Header from './components/Header/Header'
import ProductGallery from './components/ProductGallery/ProductGallery'
import Products from './components/Products/Products'
import ProductView from './components/ProductView/ProductView'
import ProductViewInfo from './components/ProductViewInfo/ProductViewInfo'
$(document).ready(() => {
  // PUT LOADERS HERE
  Products.init()
  ProductViewInfo.init()
  });
