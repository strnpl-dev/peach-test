import '../scss/style.scss';
import slider from './modules/slider'
import Map from './modules/map';

'use strict'

window.addEventListener('DOMContentLoaded', () => {

    new Map('.map__selection', '[data-region]', '[data-city]').init()
})
