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
const getWrapperWidth = () => document.querySelector('.choseus__slider').clientWidth;

const slides = document.querySelectorAll('.choseus__slider__comments');
const inner = document.querySelector('.choseus__slider__comments__inner');
const dots = document.querySelectorAll('.comments__dot');

let wrapperWidth = getWrapperWidth();
let offset = 0;

const updateSlider = () => {
  inner.style.transform = `translateX(-${offset}px)`;
};

const updateActiveDot = () => {
  dots.forEach(dot => dot.classList.remove('active'));
  const activeDotIndex = Math.floor(offset / wrapperWidth);
  dots[activeDotIndex].classList.add('active');
};

const handleSlideChange = (direction) => {
  if (direction === 'next') {
    offset += wrapperWidth;
  } else if (direction === 'prev') {
    offset -= wrapperWidth;
  }

  if (offset < 0) {
    offset = wrapperWidth * (slides.length - 1);
  } else if (offset >= wrapperWidth * slides.length) {
    offset = 0;
  }

  updateSlider();
  updateActiveDot();
};

slides.forEach((slide) => {
  slide.style.width = wrapperWidth + 'px';
  const hammer = new Hammer(slide);

  hammer.on('swipeleft', () => handleSlideChange('next'));
  hammer.on('swiperight', () => handleSlideChange('prev'));
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(item => item.classList.remove('active'));
    dot.classList.add('active');

    offset = index * wrapperWidth;
    updateSlider();
  });
});

window.addEventListener('resize', () => {
  wrapperWidth = getWrapperWidth();
  offset = 0; // Reset the offset to the first slide on resize
  slides.forEach(slide => slide.style.width = wrapperWidth + 'px');
  updateSlider();
  updateActiveDot();
});

