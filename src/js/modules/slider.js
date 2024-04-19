const slider = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },


    pagination: {
        el: '.slider__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' swiper-pagination-bullet"></span>';
        },
    },
    on: {
        init: function () {
            const bullets = document.querySelectorAll('.swiper-pagination-bullet');
            let bulletWidth = (100 / bullets.length);

            bullets.forEach(function (bullet) {
                bullet.style.width = `calc(${bulletWidth}% - 10px)`;
            });
        },
    },

    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },

});

export default slider