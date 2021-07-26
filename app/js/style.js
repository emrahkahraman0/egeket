//JS

$(document).ready(function () {
    
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

    //About-Counter
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    });

    //About-Team-Owl
    $('.about-team-owl').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        },
        1400:{
            items:4
        },
        1600:{
            items:4
        }
    }
    });

    //Career-Popup
    $(".trigger_open").hide();
    $(".close_formen").hide();

    $(".order-btn, .order-btn-mobile").click(function(){		
        $(".trigger_open").toggle();
        $(".containerwe").animate({top: '-10'}, 700);
    });

    $(".trigger_close").click(function(){	
        $(".trigger_open").hide();
    });

    //Popup_Modal


});