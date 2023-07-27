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
  // speed: 0,
  asNavFor: '.us_chosen__slider__bottom',
  appendDots: $('us_chosen__slider__bottom'),
  swipeToSlide: false,
})


$('.us_chosen__slider__bottom').slick({
	infinite: true,
	arrows: false,
	dots: false,
  // speed: 0,
  slidesToShow: 5,
  centerMode: true,
  variableWidth: true,
  asNavFor: '.us_chosen__slider__top',
})

$('.us_chosen__slider__top').slick('slickGoTo', 3);

$('.us_chosen__slider__bottom .slick-slide').on('click', function() {
  var index = $(this).index();
  $('.us_chosen__slider__top').slick('slickGoTo', index); 
});




function openAccordion(triggerSelectors, contentSelectors) {
  $(document).ready(function () {
    $(triggerSelectors).click(function () {
      var $this = $(this);
      var content = $this.next(contentSelectors);

      // Digər accordion elementlərinin hündürlüyünü sıfıra təyin edirik
      $(contentSelectors).not(content).slideUp();

      // Basılan accordion elementinin hündürlüyünü toggle edirik (açır və bağlayır)
      content.slideToggle();
    });
  });
}

openAccordion(".service__bottom__accerdeon__main", '.service__bottom__accerdeon__content')



$('.recentPosts__slider').slick({
	infinite: true,
	arrows: false,
   slidesToShow: 3,
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