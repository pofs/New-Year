var $window = $(window);
var $document = $(document);

function popupShowNew(id_el) {

    var new_id_el = '#' + id_el;
    $('#' + id_el).addClass('popup_show');
    //console.log(new_id_el);
}

function popupCloseNew(id_el) {

    //var new_id_el = '#' + id_el;
    //$('#'+ id_el).addClass('popup_show');
    //console.log(new_id_el);
    //var $popup = $(this).closest('.popup_show');

    $($('#' + id_el)).removeClass('popup_show');
    popupCheckCount();
}


// Popup show
function popupShow(event) {

    event.preventDefault();

    var $popup = $('#' + $(this).data('popup'));

    $popup.addClass('popup_show');

    $('body').addClass('overlayed');

    return false;
}

// popup close on click
function popupCheckCount() {
    if (($('.popup_show').length) < 1) {
        $('body').removeClass('overlayed');
    }
}

function popupClose(e) {

    if ($(this).is('.js-popup__close')) {
        e.preventDefault();

        var $popup = $(this).closest('.popup_show');

        $popup.removeClass('popup_show');

        popupCheckCount();
    }
    else if ($(this).is('.popup_show')) {
        var $popup = $(this),
            $popupBox = $popup.find('.popup__box');

        if ($popupBox.has(e.target).length === 0) {

            $popup.removeClass('popup_show');

            popupCheckCount();
        }
    }
}

function gallerySlider() {
    if ($('.gallery__inner').length) {
        $('.owl-carousel.gallery__inner').owlCarousel({
            items: 4,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            // autoHeight:true,
            autoplayHoverPause: true,
            nav: true,
            navText: ['', ''],
            navSpeed: 1000,
            autoplaySpeed: 300,
            responsive: {
                0: {
                    margin: 5,
                    items: 1,
                },
                630: {
                    items: 2,
                },

                768: {
                    items: 3,
                },

                992: {
                    items: 4,
                },
            }
        })
    }
}

function initGallery() {
    $('.sentence-gallery').sliderPro({
        // width: 960,
        height: 500,
        fade: true,
        arrows: true,
        buttons: false,
        fullScreen: true,
        shuffle: true,
        thumbnailArrows: true,
        autoplay: false
    });
}

function opentabs1() {
    var i = 0;
    $('.nav-f-decor__item').removeClass('nav-f-decor__item--active');
    $('.page-f-decor__item').removeClass('page-f-decor__item--active');
    $('.nav-f-decor__item').removeClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i).addClass('nav-f-decor__item--active');
    $('.nav-f-decor__item').eq(i).addClass('nav-f-decor__item--active');
    $('.page-f-decor__item').eq(i).addClass('page-f-decor__item--active');

    var el = '#style-decor';
    var top = $(el).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    return false;
}

function opentabs2(e) {
    e.preventDefault()
    var i = 1;
    $('.nav-f-decor__item').removeClass('nav-f-decor__item--active');
    $('.page-f-decor__item').removeClass('page-f-decor__item--active');
    $('.nav-f-decor__item').removeClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i - 1).addClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i).addClass('nav-f-decor__item--active');
    // $('.page-f-decor__item').eq(i).show();
    $('.page-f-decor__item').eq(i).addClass('page-f-decor__item--active');

    var el = '#style-decor';
    var top = $(el).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    return false;
}

function opentabs3(e) {
    e.preventDefault()
    var i = 2;
    $('.nav-f-decor__item').removeClass('nav-f-decor__item--active');
    $('.page-f-decor__item').removeClass('page-f-decor__item--active');
    $('.nav-f-decor__item').removeClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i - 1).addClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i - 2).addClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i).addClass('nav-f-decor__item--active');
    $('.page-f-decor__item').eq(i).addClass('page-f-decor__item--active');

    var el = '#style-decor';
    var top = $(el).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    return false;

}

function opentabs4(e) {
    e.preventDefault()
    var i = 3;
    $('.nav-f-decor__item').removeClass('nav-f-decor__item--active');
    $('.page-f-decor__item').removeClass('page-f-decor__item--active');
    $('.nav-f-decor__item').removeClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i - 1).addClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i - 2).addClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i - 3).addClass('nav-f-decor__item--check');
    $('.nav-f-decor__item').eq(i).addClass('nav-f-decor__item--active');
    $('.nav-f-decor__item').eq(i).addClass('nav-f-decor__item--active');
    $('.page-f-decor__item').eq(i).addClass('page-f-decor__item--active');

    $(".js--i-agree").change(function () {
        if (this.checked) {
            $('.btn--ordering.btn--form').removeClass('btn--disabled');
        }
        else {
            $('.btn--ordering.btn--form').addClass('btn--disabled');
        }
    })

    return false;

}

$window.on('load', function () {

});

$window.on('mousemove', function (e) {

});

$window.on('resize', function () {
    // paralaxMause();
});

$document.ready(function () {

    // paralaxMause();
    initGallery();
    startTimerNewYear();
    gallerySlider();
    scrolltTOHref();
    $("a.info-ordering__images").fancybox();
    // $("a.style-oformlenia__images").fancybox();
    $("a.text-oform__images").fancybox();
    $("a.more-info__images").fancybox();
    $("a.nominal-certificate__images").fancybox();
    $("a.b-video-data__play").fancybox();

});

$window.on('scroll', function () {
});


$(document).on('click', '*[data-popup]', popupShow);
$(document).on('click touchend', '.js-popup__close, .popup_show', popupClose);
// $(document).on('click touchend', '.variant-tabs__item', opentabs);
// $(document).on('click touchend', '.js-go-to-step1', opentabs1);
$(document).on('click touchend', '.js-go-to-step2', opentabs2);
$(document).on('click touchend', '.js-go-to-step3', opentabs3);
$(document).on('click touchend', '.js-go-to-step4', opentabs4);
$(document).on('click', '.mail-for__person', activeAvatar);
$(document).on('click', '.style-oformlenia__item', activeStyle);
$(document).on('click', '.text-oform__name', activeTextStyle);
$(document).on('click touchend', '.js-go-prev1', opentabs1);
$(document).on('click touchend', '.js-go-prev2', opentabs2);
$(document).on('click touchend', '.js-go-prev3', opentabs3);
$(document).on('click touchend', '.information__images', infoModal);


$window.on('touchend', function () {
    return true;
});

function infoModal() {
    var modaltext = $(this).attr("data-modal-text");
    $(".item-modal-text span").replaceWith(modaltext);
    console.log('+-');
}


function activeAvatar() {
    $('.mail-for__btn').removeClass("btn--disabled")
    $('.mail-for__person').removeClass('mail-for__person--active');
    $('.mail-for__person').addClass('mail-for__person--opacity');
    $(this).closest('.mail-for__person').addClass('mail-for__person--active');
}

function activeStyle() {
    $('.style-oformlenia__btn').removeClass("btn--disabled")
    $('.style-oformlenia__item').removeClass('style-oformlenia__item--active');
    $(this).closest('.style-oformlenia__item').addClass('style-oformlenia__item--active');
}

function activeTextStyle() {
    $('.text-oform__btn').removeClass("btn--disabled")
    $('.text-oform__item').removeClass('text-oform__item--active');
    $('.text-oform__item').addClass('text-oform__item--opacity');
    $(this).closest('.text-oform__item').addClass('text-oform__item--active');
}

function scrolltTOHref() {
    $('a[href^="#"]').click(function () {
        event.preventDefault();

        var el = $(this).attr('href');
        // console.log(el + '+');
        var top = $(el).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        return false;
    });

}


function startTimerNewYear() {
    var clock;
    // Grab the current date
    var currentDate = new Date();

    // Set some date in the future. In this case, it's always Jan 1
    var futureDate = new Date(currentDate.getFullYear() + 1, 0, 1);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
}

function paralaxMause() {
    var offset = $('.preview__img--lt1 ').offset();
    var offset2 = $('.preview__img--tc1').offset();
    var offset3 = $('.preview__img--tc2').offset();
    var offset4 = $('.preview__img--rt1').offset();
    var offset5 = $('.preview__img--rb1').offset();
    var offset6 = $('.preview__img--rb2').offset();
    var offset7 = $('.preview__img--lb1').offset();
    var offset8 = $('.preview__img--lb2').offset();

    $(document).on('mousemove', function (e) {
        // console.log(offset);
        $('.preview__img--lt1').css({
            left: -e.pageX / 50 + offset.left,
            top: -e.pageY / 50 + offset.top
        });
        $('.preview__img--tc1').css({
            left: -e.pageX / 20 + offset2.left,
            top: -e.pageY / 20 + offset2.top
        });
        $('.preview__img--tc2').css({
            left: -e.pageX / 30 + offset3.left,
            top: -e.pageY / 20 + offset3.top
        });
        $('.preview__img--rt1').css({
            left: -e.pageX / 10 + offset4.left,
            top: -e.pageY / 90 + offset4.top
        });
        $('.preview__img--rb1').css({
            left: -e.pageX / 70 + offset5.left,
            top: -e.pageY / 40 + offset5.top
        });
        $('.preview__img--rb2').css({
            left: -e.pageX / 100 + offset6.left,
            top: -e.pageY / 50 + offset6.top
        });
        $('.preview__img--lb1').css({
            left: -e.pageX / 70 + offset7.left,
            top: -e.pageY / 110 + offset7.top
        });
        $('.preview__img--lb2').css({
            left: -e.pageX / 10 + offset8.left,
            top: -e.pageY / 10 + offset8.top
        });
    });
}

// add.js

$(document).ready(function () {
    $('#js-validate').h5Validate({
        errorClass: 'ordering-form__group--error',
        validClass: 'ordering-form__group--success'
    });
    $('input[name=phone]').inputmask("+375(99)999-99-99");

    $('.gallery__item, .js-fancybox').fancybox();
});

$(document).on('click touchend', '.js-popup-footer', infoModal);
$(document).on('click touchend', '.js-popup-footer-long', myInfoModal);
$('.close, #popup_info').on('click touchend', function () {
    $(this).find('.close').css('right', 10)
});

function myInfoModal() {
    var modaltext = $(this).attr("data-modal-text");
    $(".item-modal-text span").replaceWith(modaltext);
    $('.close').css('right', 25);
}

$('.gallery__item').on('click', function (e) {
    e.preventDefault();
    $(this).fancybox();
});