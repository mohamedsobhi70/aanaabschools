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

if ($(".dropdown-list").length) {
    $(document).click(function () {
        $(".dropdown-list-items").removeClass("active");
    }); 
    $(".dropdown-list").on("click", function (e) {
        $(this).siblings(".dropdown-list-items").toggleClass("active");
        e.stopPropagation();
    })

    $(".dropdown-list-items").on("click", function (e) {
        e.stopPropagation();
    })
   

}