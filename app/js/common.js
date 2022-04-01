// slick active
$(window).on('load resize', function() {
    if ($(window).width() > 576) {
        $('.home-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            fade: true
        });
    } else {
        $(".home-slider.slick-initialized").slick("unslick");
    }
});
// slick active