<template>
<div class="box-dome">
    <we-button>默认按钮</we-button>
    <we-button icon='setting'>设置</we-button>
    <we-button icon="download">下载</we-button>
    <we-button :loading="loading"  @click="isLoading">登录</we-button>
    <we-button disabled>禁止点击</we-button>
</div>
</template>
<script>
import Button from '../../../src/button/Button.vue'
export default {
    components:{
        'we-button':Button,
    },
    data () {
        return {
            loading:false
        }
    },
    methods:{
        isLoading(){
            this.loading = !this.loading
        }
    }
    
}
</script>