import '../scss/style.scss';
import slider from './modules/slider'
import Map from './modules/map';
import Accordeon from './modules/accordeon';

'use strict'

window.addEventListener('DOMContentLoaded', () => {


    new Accordeon('.directions__item').init()

    new Map('.map__selection', '.map__wrapper', '.map__nav-item', '.map__dropdown-item', '.map__dot').init()
})
