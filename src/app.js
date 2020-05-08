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
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
//单元测试
//icon
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#w-setting')
    vm.$el.remove()
    vm.$destroy()
}
//loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#w-loading')
    vm.$el.remove()
    vm.$destroy()
}
//iconPositon
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
//点击
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right',
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){

    })
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}