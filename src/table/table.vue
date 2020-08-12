<template>
  <div class="we-table-wapper">
    <table class="we-table" :class="{'we-table-border':bordered,'we-table-stripe':stripe}" >
      <thead>
        <tr>
          <th><input type="checkbox" ></th>
          <th v-if='numberVisible'>#</th>
          <th v-for="(column,index) in columns" :key="index">{{column.text}}</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item,index) in dataSource" :key="item.id">
            <td><input type="checkbox" @click="onChangeItem(item,index,$event)"></td>
            <td v-if='numberVisible'>{{item.id}}</td>
            <template v-for="column in columns" >
              <td :key="column.props">{{item[column.props]}}</td>
            </template>
          </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name:"WeTable",
  props:{
    //列命
    columns:{
      type:Array,
      required: true,
    },
    //数据
    dataSource:{
      type:Array,
      required:true
    },
    //列表序号
    numberVisible:{
      type:Boolean,
      default:false
    },
    //边框
    bordered:{
      type:Boolean,
      default:false
    },
    //斑马条纹
    stripe:{
      type:Boolean,
      default:false
    },
  },
  methods:{
    onChangeItem(item,index,e){
      console.log(e.target.checked)
      this.$emit('changItem',{selected:e.target.checked,item,index})
    }
  }
}
</script>
<style lang="scss" scoped>
 @import './../var.scss';
.we-table{
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid $grey;
  color: #606266;
  &-border{
    border: 1px solid $grey;
    td,th{
      border: 1px solid $grey;
    }
  }
  &-stripe{
    tbody{
      >tr{
        &:nth-child(even){
          background: #fafafa;
        }
        &:nth-child(odd){
          background: #fff;
        }
        &:hover{
          background: #eff4f7db;
        }
      }
    }
  }
  td,th{
    border-bottom: 1px solid #ebeef5;
    text-align: left;
    padding: 8px;
  }
  
}
</style>