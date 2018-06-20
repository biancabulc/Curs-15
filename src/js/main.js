import Vue from 'vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('bootstrap/scss/bootstrap.scss');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');
require('../scss/main.scss');

var Example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  
  methods: {
    showAlert: function (event) {
      
      alert('Hello ' + this.name + '!')
  
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
