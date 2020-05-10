const expect = chai.expect
import Vue from 'vue'
import Input from '../src/Input'
Vue.config.productionTip = false
 Vue.config.devtools = false
 describe('Button', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm 
        afterEach(()=>{
            vm.$destroy()
        })
        it('input 接收 value', () => {
            vm = new Constructor({
                propsData:{
                    value:'values'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('values')
        })

        it('input 接收 disabled', () => {
            vm = new Constructor({
                propsData:{
                    disabled:true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('input 接收 readonly', () => {
            vm = new Constructor({
                propsData:{
                    readonly:true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('input 接收 error', () => {
            vm = new Constructor({
                propsData:{
                    error:'errorMessage'
                }
            }).$mount()
            const userElement = vm.$el.querySelectorAll('use')
            expect(userElement[0].getAttribute("xlink:href")).to.equal('#w-error2')
            const msgElement = vm.$el.querySelector('.error-message')
            expect(msgElement.innerText).to.equal('errorMessage')
        })
    })

    describe('事件 change / input / focus / bulr', () => {
        const Constructor = Vue.extend(Input)
        let vm 
        afterEach(()=>{
            vm.$destroy()  
        })
        ['change','input','focus','blur'].forEach((eventName)=>{
            vm = new Constructor({ }).$mount()
            const callback = sinon.fake()
            vm.$on('eventName',callback)
            //触发input的 eventName 事件
            let event = new Event('eventName')
            Object.defineProperty(
                event,'target',{
                    value:{value:'hi'},enumerable:true
                }
            )   
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event) 
            expect(callback).to.have.been.calledWith('hi')  
        })
    })


 })   