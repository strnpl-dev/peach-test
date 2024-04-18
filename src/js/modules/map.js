class Map {
    constructor(triggerBtn, cities, regions) {
        this.triggerBtn = document.querySelector(triggerBtn)
        this.cities = document.querySelectorAll(cities);
        this.regions = document.querySelectorAll(regions);

        this.regionsSelectors = document.querySelectorAll('.map__nav-item')

    }

    // showCities(evt) {
    //     const target = evt.target



    // }

    init() {


        this.regionsSelectors.forEach(el => {
            el.addEventListener(('click'), () => {
                this.regionsSelectors.forEach(el => {
                    el.classList.remove('map__nav-item_active')
                })
                el.classList.add('map__nav-item_active')
            })
        })


    }
}

export default Map