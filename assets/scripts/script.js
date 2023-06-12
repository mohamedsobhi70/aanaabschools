// Testimonial Carousel  ==> Home Page
if ($(".slider-testimonials").length > 0) {
    let swiper = new Swiper(".slider-testimonials", {
        centeredSlides: true,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.tes-prev',
            prevEl: '.tes-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 16,

            },
            680: {
                slidesPerView: 2,
                spaceBetween: 24,

            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,

            }
        }
    });
}
// =================================================

// Partners Carousel 
if ($(".slider-partners").length > 0) {
    let swiper = new Swiper(".slider-partners", {
        loop: true,
        spaceBetween: 40,
        autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
            },
            680: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            }
        },
        pagination: {
            el: '.partners-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
        }

    });
}
// =================================================

// Drop Down In Header 
if ($(".dropdown-list").length) {
    $(".dropdown-list").on("click", function (e) {
        $(".colored-act").removeClass("active")
        if ($(this).siblings(".dropdown-list-items").hasClass("active")) {
            $(".dropdown-list-items").removeClass("active");
            $(this).removeClass("active")
        }
        else {
            $(".dropdown-list-items").removeClass("active");
            $(this).siblings(".dropdown-list-items").addClass("active");
            $(this).addClass("active")
        }
    })

    $("main").on("click", function (e) {
        $(".dropdown-list-items").removeClass("active");
    })
}
// =================================================

// Change the shadow of Img ==> Home Page
if ($(".hero-img").length) {
    $(window).on("scroll", function () {
        let pos = $(".hero-img").position().top - 300;
        if (window.scrollY > pos) {
            $(".hero-img").addClass("active")
        }
        else {
            $(".hero-img").removeClass("active")
        }
    });
}
// =================================================

// Annab Accordion Component
if ($(".anb-accordion").length) {
    $(".anb-accordion").on("click", function (e) {
        $(this).toggleClass("active");
        $(this).find("p.hidden").slideToggle(300);
        $(this).find(".icon img").toggleClass("hidden");
    })
}
// =================================================
