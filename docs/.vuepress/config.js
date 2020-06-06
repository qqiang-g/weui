module.exports = {
    base:'/weui/',
    title: 'weui',
    description: '一个好用的 UI 框架',
    themeConfig:{
        nav:[
            { text: '主页', link: '/'},
            { text: '文档', link: '/install/'},
            { text: '交流', link: 'https://www.baidu.com'},
        ],
        displayAllHeaders: true,
        sidebar: [
           {
               title: '入门',
               collapsable: false,
               children:[ '/install/', '/get_started/',]
           },
            {
                title:'组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/grid',
                    '/components/input',
                    '/components/layout',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                ]
            }
        ]
        }
    
  }