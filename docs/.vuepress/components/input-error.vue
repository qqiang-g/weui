<template>
  <div class="box-dome">
    <we-input v-model="input" error='用户名错误' placeholder="请输入内容"></we-input>
  </div>
</template>
<script>
import Input from '../../../src/Input'
export default {
  name:'grid-basics',
  components:{
    'we-input':Input,
  },
  data(){
    return{
      input:''
    }
  }
}
</script>
<style>
.box-dome{
  border: 1PX solid #ebebeb;
  padding: 1em;
  border-radius: 3px;
  transition: .2s;
  margin: 10px 0 10px 0;
}
.box-dome:hover{
  box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
}
</style>
<style scoped>

</style>