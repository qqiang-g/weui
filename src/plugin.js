import Toast from './Toast'
export default{
    install(Vue,options){
        Vue.prototype.$toast = function(msg,toastOptions){
            var Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData:{
                    ...toastOptions
                }
            })
            toast.$slots.default = [msg]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}