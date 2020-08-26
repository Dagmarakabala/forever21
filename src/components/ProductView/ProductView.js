import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
  $('.productViewGallery__slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      asNavFor: '.productViewSlider__slick'
  });
  $('.productViewSlider__slick').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.productViewGallery__slick',
      prevArrow: '.slick-prev',
      nextArrow: '.slick-next',
  });
  $('.slick-slide').on("click", (function(e){ 
    e.preventDefault(); 
    let slideIndex = $(this).index() - 3
    console.log(this)
    console.log(slideIndex); 
    $( '.productViewGallery__slick' ).slick('slickGoTo', slideIndex, true); 
    }));
});

