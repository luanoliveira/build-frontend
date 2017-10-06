import './css/global.css';
import './css/post.css';
import './scss/test.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import Vue from 'vue';
import Post from './components/Post.vue';

Vue.component('post', Post);

window.$ = require('jquery');

window.Vue = Vue;