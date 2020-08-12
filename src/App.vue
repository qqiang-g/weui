<template>
  <div id="app">
    {{selected}}
    <gtable numberVisible stripe  bordered :columns='columns'   :data-source='dataSource' @changItem='changItem' />
    <pager :total-page="page.total" :current-page.sync="page.current" ></pager>
    <Button>默认按钮</Button>
    <Button icon="setting">默认按钮</Button>
    <Button icon="download" icon-position="right">下载</Button>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import pager from '@/pager/pager'
import table from '@/table/table'
import Button from '@/button/Button'
export default {
  name: "App",
  components: {
pager,gtable:table,Button
  },
  data() {
    return {
      page:{
        total:20,
        current:1
      },
      columns:[
        {text:'姓名',props:'name'},
        {text:'年龄',props:'age'}
      ],
      dataSource:[
        {id:1,name:'mack',age:18},
        {id:2,name:'mayk',age:11},
        {id:3,name:'pack',age:19},
        {id:4,name:'mack',age:18},
        {id:5,name:'mayk',age:11},
        {id:6,name:'pack',age:19},
        {id:7,name:'mack',age:18},
        {id:8,name:'mayk',age:11},
        {id:9,name:'pack',age:19},
      ],
      selected:[]
    }
  },
  created(){
  },
  methods:{
    changItem(object){
        let {selected,index,item} = object
        if(selected){
          this.selected.push(item)
        }else{
          const index = this.selected.indexOf(item)
          this.selected.splice(index,1)
        }
    }
  }
};
</script>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background: #dddddd;
  border: 1px solid #123;
}
.fade-enter-active, .fade-leave-active {
  transition: all 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  width: 100px;
}
p{
  border: 1px solid #123;
  width: 300px;
}
*{ padding:0; margin:0;  box-sizing: border-box; }
        html,body{
            width: 100%;
            height: 100%;
        }
        
        *{ padding:0; margin:0;  box-sizing: border-box; }
        html,body{
            width: 100%;
            height: 100%;
        }
        :root{  
            font-size:14px;
        }  
*::-webkit-scrollbar{
  height: 100%;
  width: 7px;
  border-radius:4px ;
} 

*::-webkit-scrollbar-track
{
    box-shadow:inset 0 0 6px #c4c3c354;
    border-radius:10px;
    background-color:#F5F5F5;
}
*::-webkit-scrollbar-track:hover
{
    box-shadow:inset 0 0 6px #c4c3c3d5;
    border-radius:10px;
    background-color:#d8d8d8;
}
*::-webkit-scrollbar-thumb
{
    border-radius:10px;
    box-shadow:inset 0 0 6px #28292993;
    background-color:#a09e9ee1;
}
*::-webkit-scrollbar-thumb:hover
{
    border-radius:10px;
    box-shadow:inset 0 0 6px #282929c4;
    background-color:#777777e1;
}
.box {
    width: 100%;
    height: 350px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>
