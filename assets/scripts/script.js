if ($(".slider-testimonials").length > 0) {
    let swiper = new Swiper(".slider-testimonials", {
        centeredSlides: true,
        loop: true,
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
if ($(".anb-accordion").length) {
    $(".anb-accordion").on("click", function (e) {
        $(this).toggleClass("active");
        $(this).find("p.hidden").slideToggle(300);
        $(this).find(".icon img").toggleClass("hidden");
    })
}

