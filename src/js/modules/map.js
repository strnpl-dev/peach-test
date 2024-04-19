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
                Array.from(this.citiesContainer).forEach(el => el.classList.remove('map__dropdown-item_active'));
                this.showDropdown(container, 'map__dropdown-item_active');
                const isCity = evt.target.getAttribute('data-city');
                this.chooseCity(evt, '.map__dropdown-cities', isCity);
            });
        });

        this.displayCities('data-region', 'south');
    }
}

export default Map;
