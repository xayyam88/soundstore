$(function(){
    $('.product-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        rows: 0,
        asNavFor: '.products-slider',
    });
    $('.products-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        row: 0,
        focusOnSelect: true,
        centerMode: true,
        prevArrow: '<img class="up-arrow" src="img/icon/up-arrow.svg" alt="">',
        nextArrow: '<img class="down-arrow" src="img/icon/down-arrow.svg" alt="">',
        asNavFor: '.product-slider',
    });
    $('.colours-avil__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        vertical: true,
        row: 0,
        focusOnSelect: true,
        centerMode: true,
        asNavFor: '.img-product__slider',
    });
    $('.img-product__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
        row: 4,
        asNavFor: '.colours-avil__slider',
    });
    
    $('.product-slider__imgs').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        row: 0,
        focusOnSelect: true,
        asNavFor: '.otherimg-product__slider',
    });
    $('.otherimg-product__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        row: 0,
        asNavFor: '.product-slider__imgs',
    });
});