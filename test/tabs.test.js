const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsBody from '../src/Tabs-Body.vue'
import TabsHead from '../src/Tabs-Head.vue'
import TabsItem from '../src/Tabs-Item'
import TabsPane from '../src/Tabs-Pane'
Vue.component({
    'g-tabs':Tabs,
    'we-tab-body':TabsBody,
    'we-tab-head':TabsHead,
    'we-tab-item':TabsItem,
    'we-tab-pane':TabsPane,
})
Vue.config.productionTip = false
Vue.config.devtools = false

 describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    }) 
    // it('子元素只能是 tabs-head 和 tabs-body ',()=>{
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     div.innerHTML =    `
    //         <g-tabs>
    //         </g-tabs>
    //     `
    //     const Constructor = Vue.extend(Input)

    // })
    console.log('Tabs 测试完成')
 })      