if ($(".slider-testimonials").length > 0) {
    let swiper = new Swiper(".slider-testimonials", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            680: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
}