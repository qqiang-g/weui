import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon'
Vue.component('we-button',Button)
Vue.component('we-icon',Icon)
new Vue({
    el:'#app',
    data () {
        return {
            loading:false
        }
    }
}) 