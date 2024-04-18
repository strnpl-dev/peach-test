import '../scss/style.scss';
import slider from './modules/slider'
import Map from './modules/map';
import Accordeon from './modules/accordeon';

'use strict'

window.addEventListener('DOMContentLoaded', () => {


    new Accordeon('.directions__item').init()

    new Map('.map__selection', '[data-region]', '[data-city]').init()
})
