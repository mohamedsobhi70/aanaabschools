// Testimonial Carousel  ==> Home Page
if ($(".slider-testimonials").length > 0) {
    let swiper = new Swiper(".slider-testimonials", {
        autoplay: true,
        pagination: {
            el: ".testimonials-pagination",
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
            },
        },
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
            },
        },
        pagination: {
            el: ".partners-pagination",
            clickable: true,
        },
    });
}
// =================================================

// ((Home page)) certificate Carousel
if ($(".slider-certificate").length > 0) {
    let swiper = new Swiper(".slider-certificate", {
        autoplay: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            680: {
                spaceBetween: 30,
            },
            1024: {
                spaceBetween: 48,
            },
        },
    });
}
// =================================================


// ((Home page)) professional-licence Carousel
if ($(".slider-professional-licence").length > 0) {
    let swiper = new Swiper(".slider-professional-licence", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 1.5,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
        },
        pagination: {
            el: ".professional-licence-pagination",
            clickable: true,
        }
    });
}
// =================================================

// ((Home page)) professional-qualifications Carousel
if ($(".slider-professional-qualifications").length > 0) {
    let swiper = new Swiper(".slider-professional-qualifications", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 1.5,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
        },
        pagination: {
            el: ".professional-qualifications-pagination",
            clickable: true,
        }
    });
}
// =================================================
// ((Home page)) professional-qualifications Carousel
if ($(".slider-free-courses").length > 0) {
    let swiper = new Swiper(".slider-free-courses", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1.1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".free-courses-pagination",
            clickable: true,
        }
    });
}
// =================================================

// Drop Down In Header

if ($(".menu-dropdown").length) {
    $(".menu-dropdown")
        .on("mouseenter", function () {
            if ($(window).width() > 1024) {
                $(this).find(".menu-dropdown-list").addClass("active");
                $(this).find(".chevron").addClass("rotat");
            }
        })
        .on("mouseleave", function () {
            if ($(window).width() > 1024) {
                $(this).find(".chevron").removeClass("rotat");
                $(this).find(".menu-dropdown-list").removeClass("active");
            }
        })
        .on("click", function () {
            if ($(window).width() < 1023) {
                $(this).find(".menu-dropdown-list").slideToggle(500);
                $(this).find(".chevron").toggleClass("rotat");
            }
        });
}
// =================================================

// Change the shadow of Img ==> Home Page
if ($(".hero-img").length) {
    $(window).on("scroll", function () {
        let pos = $(".hero-img").position().top + 100;
        if (window.scrollY > pos) {
            $(".hero-img").addClass("active");
        } else {
            $(".hero-img").removeClass("active");
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
    });
}
// =================================================

// mobile menu
$(".mob-menu-btn").on("click", function () {
    $(".mob-menu").addClass("active");
});
$(".mob-menu-closbtn").on("click", function () {
    $(".mob-menu").removeClass("active");
});

// =================================================


//  Filtering slider-training-courses
// ((Home page)) slider-training-courses Carousel
if ($(".slider-training-courses").length > 0) {
    let swiper = new Swiper(".slider-training-courses", {
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1.1,
            },
            680: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".training-courses-pagination",
            clickable: true,
        }
    });

    $(".iso-nav .filter-item").on("click", function () {
        swiper.destroy()
        $(".iso-nav .filter-item").removeClass("active")
        $(this).addClass("active");
        let filt = $(this).attr("data-filter");

        if (filt === "*") {
            $(".slider-training-courses .swiper-slide").removeClass("hidden");
            swiper = new Swiper(".slider-training-courses", {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1.1,
                    },
                    680: {
                        spaceBetween: 24,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: ".training-courses-pagination",
                    clickable: true,
                }
            });
        }
        else {
            $(".slider-training-courses .swiper-slide").removeClass("hidden");
            $(`.slider-training-courses .swiper-slide:not(${filt})`).addClass("hidden");
            swiper = new Swiper(".slider-training-courses", {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1.1,
                    },
                    680: {
                        spaceBetween: 24,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: ".training-courses-pagination",
                    clickable: true,
                }
            });
        }
    })
}
// =================================================
