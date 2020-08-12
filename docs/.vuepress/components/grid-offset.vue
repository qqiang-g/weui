<template>
  <div class="box-dome">
    <we-row gutter="5">
      <we-col :span="6" class="bg-purple"></we-col></we-col>
      <we-col :span="6" :offset="6" class="bg-purple-light"></we-col>
    </we-row>
    <we-row gutter="5">
      <we-col :span="6" :offset="6"  class="bg-purple"></we-col></we-col>
      <we-col :span="6" :offset="6" class="bg-purple-light"></we-col>
    </we-row>
    <we-row gutter="5">
      <we-col :span="12" :offset="6"  class="bg-purple"></we-col></we-col>
    </we-row>
  </div>
</template>
<script>
import Row from '../../../src/grid/Row.vue'
import Col from '../../../src/grid/Col.vue'
export default {
  name:'grid-basics',
  components:{
    'we-row':Row,
    'we-col':Col,
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
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.we-col{
  border-radius: 3px;
  margin-top: 10px;
  
}
</style>