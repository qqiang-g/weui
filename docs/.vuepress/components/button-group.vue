<template>
<div class="box-dome">
    <we-button-group>
    <we-button icon="left">上一页</we-button>
    <we-button icon="right" iconPosition="right">下一页</we-button>
    </we-button-group>
</div>
</template>
<script>
import Button from '../../../src/button/Button.vue'
import ButtonGroup from '../../../src/button/Button-Group.vue'
export default {
    components:{
        'we-button':Button,
        'we-button-group':ButtonGroup
    },
}
</script>