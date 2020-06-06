import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon'
import ButtonGroup from './Button-Group'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Layout from './Layout'
import Header from './Header'
import Content from './Content'
import Sider from './Sider'
import Footer from './Footer'
// import Toast from './Toast'
import plugin from './plugin'
import Tabs from './Tabs'
import TabsHead from './Tabs-Head'
import TabsItem from './Tabs-Item'
import TabsBody from './Tabs-Body'
import TabsPane from './Tabs-Pane'
import Popover from './Popover'
import Collapse from './Collapse' 
import CollapseItem from './Collapse-Item'
import Cascader from './Cascader'

Vue.use(plugin)
const components = {
    'we-button':Button,
    'we-icon':Icon,
    'we-button-group':ButtonGroup,
    'we-input':Input,
    'we-row':Row,
    'we-col':Col,
    'we-layout':Layout,
    'we-header':Header,
    'we-content':Content,
    'we-sider':Sider,
    'we-tabs':Tabs,
    'we-tabs-head':TabsHead,
    'we-tabs-item':TabsItem,
    'we-tabs-body':TabsBody,
    'we-tabs-pane':TabsPane,
    'we-footer':Footer,
    "we-popover":Popover,
    'we-collapse':Collapse,
    'we-collapse-item':CollapseItem,
    'we-cascader':Cascader,
}

var vm = new Vue({
    el:'#app',
    components,
    data () {
        return {
            loading:false,
            message:'你好',
            selectedTab:'a',
            selectedTabs:['c','a'],
            source:[
                {
                    name:'浙江',
                    children:[
                        {  name:'杭州',
                            children:[
                                {name:'上城区'},
                                {name:'下城区'},
                                {name:'江干区'}
                            ]
                        },
                        {name:'嘉兴'},
                        {name:'湖州'}
                    ]
                },
                {name:'福建',children:[{name:'福州'},{name:'厦门'},{name:'三明'},{name:'泉州'}]},
                {name:'河南',children:[ {name:'郑州',children:[{name:'金水'},{nane:'二七'}]}, {name:'洛阳'}
                ]}
            ]
        }
    },
    methods: {

        inputChange(e){
            console.log('inputChange')
        },
        change(){
            console.log('change')
        },
        input(){
            console.log('input')
        },
        focus(){
            console.log('focus')
            this.$on('ha',()=>'ha')
        },
        blur(){
            console.log(this['focus'])
        },
        click(){
            this.$toast('密码错误！！！',{
                icon:'warning--alt-inverted--filled',
                position:'middle',
                autoClose:0.1,
                // closeButton:{
                    // text:'关闭',
                    // icon:'flag-error',
                    // callback(){
                        // console.log('close')
                    // }
                // }
            })
        }
    }
}) 
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect