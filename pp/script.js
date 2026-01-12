var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true, // Курсор-рука при наведении
    centeredSlides: true, // Активный слайд всегда в центре
    slidesPerView: "auto", // Авто-ширина слайдов
    coverflowEffect: {
        rotate: 50, // Угол поворота боковых слайдов (как в iTunes)
        stretch: 0,
        depth: 100, // Глубина перспективы (чем больше, тем дальше боковые)
        modifier: 1,
        slideShadows: true, // Тени по бокам
    },
    keyboard: {
        enabled: true, // Можно листать стрелками
    },
    mousewheel: {
        thresholdDelta: 70, // Можно листать колесиком мыши
    },
    // Начальный слайд (середина, если их, например, 3)
    initialSlide: 1 
});