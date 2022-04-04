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

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        $('.mobile-menu').fadeOut();

        return false;
    });
});
//плавный скролл end

$('[name="phone"]').mask('+7 (999) 999-99-99');

$(document).ready(function () {

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // alert("Спасибо за заявку! Скоро мы с вами свяжемся.");

            $('.modal').removeClass('show');

            $('#thanksModal').addClass('show');

            $(".form").trigger("reset");
        });
        return false;
    });

});


$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});