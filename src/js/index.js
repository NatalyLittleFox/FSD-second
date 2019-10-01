import $ from 'jquery';
global.jquery = global.jQuery = global.$ = $;
const bootstrap = require('bootstrap');
const popperJS = require('popper.js');
import * as dropdown from './form-elements/dropdown/dropdown.js';
import * as checkbox from './form-elements/checkbox/checkbox.js';
import * as likeButton from './form-elements/like-button/like-button.js'
import * as rateButton from './form-elements/rate-button/rate-button.js'
import * as rangeSlider from './form-elements/range-slider/range-slider.js'


dropdown.dropdownSelectedItem();
dropdown.dropdownCounter();

checkbox.checkboxListShow();

likeButton.like()

rateButton.rate();

rangeSlider.slider('id');