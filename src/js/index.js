const bootstrap = require('bootstrap');
const popperJS = require('popper.js');
import * as dropdown from './form-elements/dropdown/dropdown.js';
import * as checkbox from './form-elements/checkbox/checkbox.js';
import * as likeButton from './form-elements/like-button/like-button.js';
import * as rateButton from './form-elements/rate-button/rate-button.js';
import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';
import * as calendar from './cards/calendar/calendar.js'
import * as preview from './cards/preview/preview.js'
// import * as rangeSlider from './form-elements/range-slider/range-slider.js';


window.addEventListener('DOMContentLoaded', function () {

    dropdown.dropdownSelectedItem();
    dropdown.dropdownCounter();

    checkbox.checkboxListShow();

    likeButton.like();

    rateButton.rate();




    calendar.insertCalendar('.calendar');

    let images = ['image1', 'image2', 'image3', 'image55'];
    preview.slider(images, 'png');


    // rangeSlider.slider('id');
})