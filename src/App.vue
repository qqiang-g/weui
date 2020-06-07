<template>
  <div id="app">
    <we-button>你好</we-button>
    <div style="margin:30px;">
    <we-cascader 
      :selected.sync='selected' 
      :source.sync="source" 
      popover-height="300px"
    ></we-cascader>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import area from './area'
import Button from "./Button";
import Cascader from "./Cascader";
export default {
  name: "App",
  components: {
    "we-button": Button,
    "we-cascader": Cascader    
  },
  data() {
    return {
      source:[
        {name:'1',id:1,children:[
          {name:'2', id:2,children:[
            {name:'3',id:3}
          ]}
        ]}
      ], 
      selected:[]
    };
  },
  created(){
    // this.ajax2(0).then(result=>{
    //   this.source = result
    // })
  },
  methods:{
    loadData(node,callback){
      // console.log(node)
      let {name,id,parent}  = node
      this.ajax2(id).then(result=>{
        // console.log(result)
        callback(result)
      })
    },
    ajax2(parent=0){
      return new Promise((resolve,reject)=>{
        let id =setTimeout(()=>{
          let result = area.filter(item=>item.parent == parent)
          result.forEach(node=>{
            if(area.filter(item=>item.parent === node.id).length>0){
              node.isLeaf = false
            }else{
              node.isLeaf = true
            }
          })
            clearTimeout(id)
          resolve(result)
        },500)
        
      })
    }
  },
  computed:{
  }
};
</script>

<style lang="scss"></style>
<style>
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
</style>
