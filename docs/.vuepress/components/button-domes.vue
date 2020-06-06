<template>
<div>
    <we-button>默认按钮</we-button>
    <we-button icon='setting'>默认按钮</we-button>
    <we-button loading>默认按钮</we-button>
    <we-button disabled>默认按钮</we-button>
    <pre><code>{{html}}</code></pre>
</div>
</template>
<script>
import Button from '../../../src/Button.vue'
import Icon from '../../../src/Icon.vue'
export default {
    components:{
        'we-button':Button,
        'we-icon':Icon
    },
    data () {
        return {
            html:`
            <we-button>默认按钮</we-button>
            <we-button icon='setting'>默认按钮</we-button>
            <we-button :loading="true">默认按钮</we-button>
            <we-button disabled>默认按钮</we-button>
            `.replace('/\t+| +/g','').trim()
        }
    }
    
}
</script>