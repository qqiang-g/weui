module.exports = {
    title: 'We-UI',
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
               children:[ '/install/', '/get_started/',]
           },
            {
                title:'组件',
                children: ['/components/button']
            }
        ]
        }
    
  }