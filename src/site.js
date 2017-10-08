import '../node_modules/font-awesome/scss/font-awesome.scss';
import './css/global.css';
import './css/post.css';
import './scss/test.scss';

import Vue from 'vue';

import { Post, Button, soma } from './components';

Vue.component('post', Post);
Vue.component('my-button', Button);

console.log( soma(1.5,7) );

window.$ = require('jquery');

window.Vue = Vue;