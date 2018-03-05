/*
 * Main Javascript file for data-healer.
 *
 * This file bundles all of your javascript together using webpack.
 */

// JavaScript modules
require('jquery');
require('font-awesome-webpack');
require('materialize-css');

var Vue = require('vue');
window.Vue = Vue;

// Your own code
require('./controller.js');