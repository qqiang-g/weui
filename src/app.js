import Vue from 'vue'
import Button from './Button.vue'
Vue.components('we-button',Button)
new Vue({
    el:'#app',
    data:{
        message:'oh yeah!!!'
    }
})