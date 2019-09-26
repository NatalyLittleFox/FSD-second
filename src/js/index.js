import $ from 'jquery';
const bootstrap = require('bootstrap');
const popperJS = require('popper.js');
import * as dropdown from './dropdown/dropdown.js';
import * as checkbox from './checkbox/checkbox.js';

global.jquery = global.jQuery = global.$ = $;

dropdown.dropdownSelectedItem();
dropdown.dropdownCounter();

checkbox.checkboxListShow();
