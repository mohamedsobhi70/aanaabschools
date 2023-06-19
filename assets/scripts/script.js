// Testimonial Carousel  ==> Home Page
if ($(".slider-testimonials").length > 0) {
    let swiper = new Swiper(".slider-testimonials", {
        centeredSlides: true,
        loop: true,
        autoplay: true,
        pagination: {
            el: '.testimonials-pagination',
            clickable: true,
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
        }

    });
}
// =================================================

// Drop Down In Header 




if ($(".dropdown-list").length) {
    $(".dropdown-list").hover(function (e) {
        $(".colored-act").removeClass("active")
        if ($(this).find(".dropdown-list-items").hasClass("active")) {
            $(".dropdown-list-items").removeClass("active");
            $(this).removeClass("active")
        }
        else {
            $(".dropdown-list-items").removeClass("active");
            $(this).find(".dropdown-list-items").addClass("active");
            $(this).addClass("active")
        }
    })

}
// mobile dropdown 
if ($(".menu-dropdown").length) {
    $(".menu-dropdown").on("click", function (e) {
        $(".menu-dropdown-list").slideToggle(500);
    })
}
// =================================================

// Change the shadow of Img ==> Home Page
if ($(".hero-img").length) {
    $(window).on("scroll", function () {
        let pos = $(".hero-img").position().top + 100;
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
        $(this).find(".anb-accordion-content").slideToggle(300);
        $(this).find(".icon img").toggleClass("hidden");
    })
}
// =================================================



// mobile menu 
$(".mob-menu-btn").on("click", function () {
    $(".mob-menu").addClass("active");
})
$(".mob-menu-closbtn").on("click", function () {
    $(".mob-menu").removeClass("active");
})