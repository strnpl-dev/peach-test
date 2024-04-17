const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
    sections.forEach(function (section) {
        if (isElementInViewport(section)) {
            section.classList.add('animate__animated', 'animate__slideInUp');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export default sectionAnimation