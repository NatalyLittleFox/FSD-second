import $ from 'jquery';
const bootstrap = require('bootstrap');
const popperJS = require('popper.js');
import * as dropdown from './dropdown/dropdown.js';
import * as checkbox from './checkbox/checkbox.js';
import * as likeButton from './like-button/like-button.js'
import * as rateButton from './rate-button/rate-button.js'
import * as rangeSlider from './range-slider/range-slider.js'


global.jquery = global.jQuery = global.$ = $;

dropdown.dropdownSelectedItem();
dropdown.dropdownCounter();

checkbox.checkboxListShow();

likeButton.like()

rateButton.rate();

rangeSlider.slider();