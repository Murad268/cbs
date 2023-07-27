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
			},
		},
		{
			breakpoint: 810,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				arrows: false,
			},
		},
	],
})
$('.prev-button').click(() => {
	$('.our__team__wrapper').slick('slickPrev')
})

$('.next-button').click(() => {
	$('.our__team__wrapper').slick('slickNext')
})

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

$('.us_chosen__slider__top').slick('slickGoTo', 3)

$('.us_chosen__slider__bottom .slick-slide').on('click', function () {
	var index = $(this).index()
	$('.us_chosen__slider__top').slick('slickGoTo', index)
})

function openAccordion(triggerSelectors, contentSelectors) {
	$(document).ready(function () {
		$(triggerSelectors).click(function () {
			var $this = $(this)
			var content = $this.next(contentSelectors)

			// Digər accordion elementlərinin hündürlüyünü sıfıra təyin edirik
			$(contentSelectors).not(content).slideUp()

			// Basılan accordion elementinin hündürlüyünü toggle edirik (açır və bağlayır)
			content.slideToggle()
		})
	})
}

openAccordion(
	'.service__bottom__accerdeon__main',
	'.service__bottom__accerdeon__content'
)

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
			},
		},
		{
			breakpoint: 810,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				arrows: false,
			},
		},
	],
})

function openHoverCursor(className, menuClass) {
  const menu = document.querySelector(menuClass);
  const links = document.querySelectorAll(className);

  document.addEventListener('click', (e) => {

    if (!e.target.closest('.header__services')) {
      menu.classList.remove('active');
    }
  });

  links.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
      menu.classList.add('active');
    });
  });
}

openHoverCursor('.our__services span', '.header__services');


function openHamburgerMenu (triggerSelector, menuSelector) {
  const header__hamburger = document.querySelector(triggerSelector),
        menu = document.querySelector(menuSelector);

  header__hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    header__hamburger.classList.toggle("active")
  })
}

openHamburgerMenu(".header__hamburger", '.hamburger__menu')


function openHamburgerMenuServices(triggerSelector, listSelector) {
  const trigger = document.querySelector(triggerSelector),
        list = document.querySelector(listSelector)
  trigger.addEventListener('click', () => {
    list.classList.toggle("active")
  })
}

openHamburgerMenuServices('.hamburger__main__services', '.hamburger__main')