<template>
  <div class="icon-dome box-dome">
    <we-icon name='setting'></we-icon>
    <we-icon name='zan'></we-icon>
    <we-icon name='upload'></we-icon>
    <we-icon name='download'></we-icon>
  </div>
</template>
<script>
import Icon from '../../../src/icon/Icon.vue'
export default {
  components:{
    'we-icon':Icon
  }
}
</script>
<style scoped>
  .icon-dome{
    font-size: 30px;
  }
</style>