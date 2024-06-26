class Map {
    constructor(trigger, wrapper, regions, citiesContainer, dots) {
        this.trigger = document.querySelector(trigger);
        this.wrapper = document.querySelector(wrapper);
        this.regions = document.querySelectorAll(regions);
        this.citiesContainer = document.querySelectorAll(citiesContainer);
        this.dots = document.querySelectorAll(dots);
    }

    displayCities(attr, city) {
        this.dots.forEach(dot => {
            if (city === 'all') {
                dot.style.display = 'block';
            } else if (dot.getAttribute(attr) !== city) {
                dot.style.display = 'none';
            } else {
                dot.style.display = 'block';
            }
        });
    }

    showDropdown(el, active) {
        el.classList.toggle(active);
    }

    chooseCity(evt, name, isCity) {
        const target = evt.target;
        const attrRegion = evt.target.getAttribute('data-region');

        this.displayCities(
            isCity ? 'data-city' : 'data-region',
            isCity ? evt.target.getAttribute('data-city') : attrRegion
        );

        if (isCity) {
            this.showDropdown(this.wrapper, 'map__wrapper_active');
        }
    }

    init() {
        this.regions.forEach(el => {
            el.addEventListener('click', (evt) => {
                this.regions.forEach(el => {
                    el.classList.remove('map__nav-item_active');
                });
                el.classList.add('map__nav-item_active');
                this.chooseCity(evt, '.map__nav-item', false);
            });
        });

        this.trigger.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.showDropdown(this.wrapper, 'map__wrapper_active');
        });

        this.citiesContainer.forEach(container => {
            container.addEventListener('click', (evt) => {
                const clickedItem = evt.target.closest('.map__dropdown-item');
                if (!clickedItem) return;

                const isCityItem = evt.target.closest('.map__dropdown-cities li');
                if (isCityItem) {
                    const isCity = isCityItem.getAttribute('data-city');
                    this.chooseCity(evt, '.map__dropdown-cities', isCity);
                    return;
                }

                Array.from(container.querySelectorAll('.map__dropdown-item')).forEach(el => el.classList.remove('map__dropdown-item_active'));

                if (clickedItem.classList.contains('map__dropdown-item_active')) {
                    clickedItem.classList.remove('map__dropdown-item_active');
                } else {
                    clickedItem.classList.add('map__dropdown-item_active');
                }
            });
        });





        this.displayCities('data-region', 'all');
    }
}

export default Map;
