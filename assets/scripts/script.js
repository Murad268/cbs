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


 var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
});