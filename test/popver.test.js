const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/Popover'
Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Popover', () => {
     it('存在.', () => {
         expect(Popover).to.exist
     })
    //  it('可以设置position.', (done) => {
    //      Vue.component('we-popover',Popover)
    //      const div = document.createElement('div')
    //      div.innerHTML = 
    //      `<we-popover position = 'bottom'>
    //         <template slot='content>
    //             <div>内容</div></div>
    //         </template>
    //         <button>按钮</button>
    //      </we-popover>`
    //      const vm = new Vue({
    //          el:div,
    //      })
    //      vm.$nextTick(()=>{
    //          console.log(vm.$el.outerHTML)
    //      })
        //  const useElement = vm.$el.querySelector('.position-top')
        //  expect(1).to.equal(1)
        //  vm.$destroy()
    //  })
    //  it('可以设置loading.', () => {
    //      const Constructor = Vue.extend(Popover)
    //      const vm = new Constructor({
    //      propsData: {
    //          icon: 'settings',
    //          loading: true
    //      }
    //      }).$mount()
    //      const useElements = vm.$el.querySelectorAll('use')
    //      expect(useElements.length).to.equal(1)
    //      expect(useElements[0].getAttribute('xlink:href')).to.equal('#w-loading')
    //      vm.$destroy()
    //  })
    //  it('icon 默认的 order 是 1', () => {
    //      const div = document.createElement('div')
    //      document.body.appendChild(div)
    //      const Constructor = Vue.extend(Popover)
    //      const vm = new Constructor({
    //      propsData: {
    //          icon: 'settings',
    //      }
    //      }).$mount(div)
    //      const icon = vm.$el.querySelector('svg')
    //      expect(getComputedStyle(icon).order).to.eq('1')
    //      vm.$el.remove()
    //      vm.$destroy()
    //  })
    //  it('设置 iconPosition 可以改变 order', () => {
    //      const div = document.createElement('div')
    //      document.body.appendChild(div)
    //      const Constructor = Vue.extend(Popover)
    //      const vm = new Constructor({
    //      propsData: {
    //          icon: 'settings',
    //          iconPosition: 'right'
    //      }
    //      }).$mount(div)
    //      const icon = vm.$el.querySelector('svg')
    //      expect(getComputedStyle(icon).order).to.eq('2')
    //      vm.$el.remove()
    //      vm.$destroy()
    //  })
    //  it('点击 Popover 触发 click 事件', () => {
    //      const Constructor = Vue.extend(Popover)
    //      const vm = new Constructor({
    //      propsData: {
    //          icon: 'settings',
    //      }
    //      }).$mount()

    //      const callback = sinon.fake();
    //      vm.$on('click', callback)
    //      vm.$el.click()
    //      expect(callback).to.have.been.called
    //  })   
     console.log('Popover 测试完成')
 })   