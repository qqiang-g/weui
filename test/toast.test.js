const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/Toast'
Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Toast', () => {
     it('存在', () => {
         expect(Toast).to.be.ok
     });

     describe('props', function() {
         //最后测试
        it('接受autoClose', (done)=>{
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    autoColse:0.1,
                }  
            }).$mount(div) 
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                vm.$el.remove()
                vm.$destroy()
            })
            done()  
        })
        it('接收 closeButton' ,()=>{
            const callback = sinon.fake()
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    closeButton:{  
                        text:'关闭',
                        // icon:'flag-error',
                        callback
                    }
                }  
            }).$mount(div) 
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭')
        })
     }) 
     console.log('Toast 测试完成')
 })    