let onClickDocument = (e)=>{
  let {target} = e
  callback.forEach(item=>{
    if(item.el === target || item.el.contains(target)){
      return
    }else{
      item.callback()
    }
  })
}
document.addEventListener('click',onClickDocument)
let callback =[]
export default {
  bind:function(el,binding,vnode){
    callback.push({el,callback: binding.value})
  }
}
let remveListener = ()=>{
  document.removeEventListener('click',onClickDocument)
}