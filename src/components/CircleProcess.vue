<script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps<{ 
    ratio: number; /*0~100*/
  }>()

  const degree = computed(()=>{
    let ratio = (1-props.ratio/100);
    ratio = ratio < 0 ? 0 : (ratio>1 ? 1 : ratio);
    return 360 * ratio;
  });
</script>

<template>
  <div class="inline-flex items-center justify-center w-20 h-20">
    <div class="inline-block rounded-full w-16 h-16 absolute border-5 border-amber-50"></div>
    <div class="inline-block w-18 h-18 absolute "
      :style="{
        transform: 'scaleX(-1)',
        background: 'conic-gradient(#242424 '+(degree)+'deg 0deg, transparent 0deg 0deg)'
      }">
    </div>
    <h3 class="absolute">{{ 100 - degree/360*100 }}</h3>
  </div>
</template>