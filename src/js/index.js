import $ from 'jquery';
const bootstrap = require('bootstrap');
const popperJS = require('popper.js');
import * as dropdown from './dropdown/dropdown.js';

global.jquery = global.jQuery = global.$ = $;

dropdown.dropdownSelectedItem();


dropdown.dropdownCounter();
