<template>
  <div ref="trigger">-</div>
</template>

<script>
import {
  defineComponent, onMounted, onUnmounted, ref
} from 'vue'

export default defineComponent({
  setup(props, {emit}){
    const trigger = ref();
    const options = {
      root: null,
      //threshold는 해당 컴포넌트가 화면에 얼마나 보였을 때를 감지// 1은 100%, 0.1은 10%
      threshold: 1
    }
    let observer = null
    const handleIntersect = (entry) =>{
      if(entry.isIntersecting) emit('triggerIntersected', trigger.value)
    }
    onMounted(()=>{
      try{
        //옵저버가 감지되면 handleIntersect 함수를 실행
        observer = new IntersectionObserver((entries)=>{
          handleIntersect(entries[0])
        }, options)
        observer.observe(trigger.value)
      } catch (err){
        console.log(err)
      }
    })
    onUnmounted(()=>{
      observer.value.disconnect();
    })
    return {
      trigger
    }
  }
})
</script>

<style scoped>

</style>