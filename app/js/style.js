//JS

//Lazy-Load
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload"
});

//Menu
$(function () {
    $('.hamburger').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.mobile-nav').toggleClass('open');
    });
});

//Menu-Active
jQuery(function($) {
    var path = window.location.href;
    $('ul li a').each(function() {
        if (this.href === path) {
            $(this).addClass('active');
        }
    });
});

//Menu-Scroll
$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed')
    }
});

//Home_Slider
$('.home_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
});