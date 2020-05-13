const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/Toast'
Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Toast', () => {
     it('存在.', () => {
         expect(Toast).to.be.ok
     });

     describe('props', function () {
        if('接受 antoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    autoClose:true,
                    autoCloseDelay:10000  
                }
                 
            }).$mount()
            console.log(document.body.contains(vm.$el))
            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            },20000)
        });

     }) 

     console.log('Toast 测试完成')
 })   