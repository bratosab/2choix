$(document).ready(function () {
    //Collaps navbar
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //Page scroll
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    //Scroll spy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })


    //First banner height
    var slideHeight = $(window).height();
    if (slideHeight < 400) { slideHeight = 400; }
    $('#question .item').css('height', slideHeight);

    $(window).resize(function () {
        slideHeight = $(window).height();
        if (slideHeight < 400) { slideHeight = 400; }
        $('#question .item').css('height', slideHeight);
    });

    //Wow JS
    new WOW().init();
    
    //Bootsrap tooltips
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
    });

    //Bootstrap Popovers
    $(document).ready(function () {
        $('[data-toggle="popover"]').popover();
    });
})