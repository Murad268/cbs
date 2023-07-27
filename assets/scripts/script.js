$('.banner__sliders').slick({
	infinite: true,
	arrows: false,
	dots: true,
})
$('.our__team__wrapper').slick({
	infinite: true,
	arrows: false,
   slidesToShow: 4,
	dots: false,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1220, 
         settings: {
           slidesToShow: 3,
       
         }
         
       },
       {
         breakpoint: 810, 
         settings: {
           slidesToShow: 2,
    
         }
         
       },
       {
         breakpoint: 600, 
         settings: {
           slidesToShow: 1,
           arrows: false
         }
         
       },
   ]
})
$('.prev-button').click(() => {
   $('.our__team__wrapper').slick('slickPrev');
 });
 
 $('.next-button').click(() => {
   $('.our__team__wrapper').slick('slickNext');
 });



 $('.us_chosen__slider__top').slick({
	infinite: true,
	arrows: false,
	dots: false,
  asNavFor: '.us_chosen__slider__bottom',
  appendDots: $('us_chosen__slider__bottom'),
})


$('.us_chosen__slider__bottom').slick({
	infinite: true,
	arrows: false,
	dots: false,
  slidesToShow: 5,
  centerMode: true,
  variableWidth: true,
  asNavFor: '.us_chosen__slider__top',


})


$('.us_chosen__slider__bottom .slick-slide').on('click', function() {
  var index = $(this).index();
  $('.us_chosen__slider__top').slick('slickGoTo', index); // Slider 2'yi tıklanan dots'a göre konumlandırın
});


