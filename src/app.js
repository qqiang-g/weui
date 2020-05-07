import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon'
import ButtonGroup from './Button-Group'
Vue.component('we-button',Button)
Vue.component('we-icon',Icon)
Vue.component('we-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data () {
        return {
            loading:false
        }
    }
}) 