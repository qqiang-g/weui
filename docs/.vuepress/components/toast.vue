<template>
<div class="box-dome">
    <we-button @click="$toast('点击弹出提示')">上方弹出</we-button>
    <we-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</we-button>
    <we-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</we-button>
    <we-button>登录</we-button>
    <we-button>禁止点击</we-button>
</div>
</template>
<script>
import Button from '../../../src/button/Button.vue'
import Toast from '../../../src/toast/Toast.js'
import Vue from 'vue'
Vue.use(Toast)
export default {
    components:{
        'we-button':Button,
        'we-toast':Toast,
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