const expect = chai.expect
import Vue from 'vue'
import Row from '../src/Row'
import Col from '../src/Col'
Vue.config.productionTip = false
 Vue.config.devtools = false
 describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    }) 
    it('接收 gutter 属性', (done) => {
        Vue.component('we-row',Row)
        Vue.component('we-col',Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <we-row gutter='20'> 
                <we-col span='12'></we-col>
                <we-col span='12'></we-col>
            </we-row>
        ` 
        const vm = new Vue({
            el:div
        }) 
        setTimeout(() => { 
            const rows = vm.$el.querySelectorAll('.row')
            expect(getComputedStyle(rows[0]).marginLeft).to.equal('-10px')
            expect(getComputedStyle(rows[0]).marginRight).to.equal('-10px')

            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.equal('10px')
            console.log('row 测试完成')
            done()  
            vm.$el.remove()
            vm.$destroy()
        },1000)     
    });

    //后续添加
    // if('接收 align 属性', () => {
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //     propsData: {
    //         align:'left',
    //     }
    //     }).$mount(div)
    //     const element = vm.$el
    //     expect(getComputedStyle(element).justifyContent).to.eq('left')
    //     div.remove()
    //     vm.$destroy()
    // });
 })      