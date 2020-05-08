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
//icon
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#w-setting')
    button.$el.remove()
    button.$destroy()
}
//loading
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#w-loading')
    button.$el.remove()
    button.$destroy()
}
//iconPositon
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
//
{
    const Constructor = Vue.extend(Button)
    const we_button = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right',
        }
    })
    we_button.$mount()
    we_button.$on('click',function(){
        expect(1).to.eq(1)
    })
    let button = we_button.$el
    button.click()
    we_button.$el.remove()
    we_button.$destroy()
}