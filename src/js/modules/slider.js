const slider = new Swiper('.swiper', {
    // Опциональные параметры
    direction: 'horizontal',
    loop: true,

    // Если нужна пагинация
    pagination: {
        el: '.slider__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' swiper-pagination-bullet"></span>';
        },
    },
    on: {
        init: function () {
            var bullets = document.querySelectorAll('.swiper-pagination-bullet');
            var bulletWidth = (100 / bullets.length); // Вычисляем ширину буллета с учетом отступа в 10px

            bullets.forEach(function (bullet) {
                bullet.style.width = `calc(${bulletWidth}% - 10px)`;
            });
        },
    },

    // Стрелки навигации
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
});

export default slider