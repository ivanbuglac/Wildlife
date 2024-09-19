const swiper = new Swiper('.mySwiper', {
	direction: 'horizontal',
	loop: true,
	speed: 300,
	effect: 'slide',
	slidesPerView: 3, // Показывать сразу 3 слайда
	spaceBetween: 60, // Расстояние между слайдами
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
