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
import chai from 'chai'
const expect = chai.expect
//单元测试
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
        },
        solt:'ninin'
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#w-setting')
}
