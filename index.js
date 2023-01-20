AOS.init();
$('.header__img').slick({
    centerMode: true,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                // arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
$('.header__img2').slick({
    arrows: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
})
$('.flower__bg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.flower__items'
});
$('.flower__imgs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    fade: false,
    asNavFor: '.flower__items'
});
$('.flower__title').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    fade: false,
    asNavFor: '.flower__items'
});
$('.flower__items').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    asNavFor: '.flower__aaa',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
});


const order__container = document.querySelector('.order__container')
$('.order__container').slick({
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding: '60px',
})
$('.order__item').slick({
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    dots: true,
})
const order__amount = document.querySelectorAll('.order__amount')
function add(index, i) {
    orderdata[index].amount = Math.max(0, orderdata[index].amount + 1)
    console.log(orderdata);
    order__amount[index].innerText = orderdata[index].amount
}