$('.banner__sliders').slick({
	infinite: true,
	arrows: false,
	dots: true,
})

const wrapper = document.querySelector('.choseus__slider')
const slides = document.querySelectorAll('.choseus__slider__comments')
const inner = document.querySelector('.choseus__slider__comments__inner')
let wrapperWidth = wrapper.clientWidth
let offset = 0


const nextFunction = () => {
	if (offset < wrapperWidth * (slides.length - 1)) {
		offset += wrapperWidth
	} else {
		offset = 0
	}

	inner.style.transform = `translateX(-${offset}px)`
}

const leftFunction = () => {
	if (offset > 0) {
		offset -= wrapperWidth;
	} else {
		offset = wrapperWidth * (slides.length - 1);
	}

	inner.style.transform = `translateX(-${offset}px)`;
}


slides.forEach((slide) => {
	
	slide.style.width = wrapperWidth + 'px'
   const hammer = new Hammer(slide)

	// Swipe left (sola doğru swipe) olayını dinlemek için bir işlev tanımlayın
	hammer.on('swipeleft', nextFunction)
   hammer.on('swiperight', leftFunction)
})

