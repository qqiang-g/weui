<template>
  <div class="box-dome">
    <we-popover trigger='hover'>
      <we-button>Hover触发</we-button>
      <div slot="content">内容</div>
    </we-popover>
    <we-popover>
      <we-button>Click触发</we-button>
      <div slot="content">内容</div>
    </we-popover>
  </div>
</template>
<script>
import Popover from '../../../src/Popover.vue'
import Button from '../../../src/button/Button.vue'
export default {
  name:'grid-basics',
  components:{
    'we-popover':Popover,
    'we-button':Button
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