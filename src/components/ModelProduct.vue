<script setup lang="ts">
  import { ref } from 'vue';
  import type * as dataType from '../assets/dataType';
  import { Close as CloseIcon, } from '@vicons/ionicons5';
  const showModal = ref(false)
  const showProduct = ref<dataType.product | null>(null)

  function openModal(){
    showModal.value = true;
  }
  function closeModal(){
    showModal.value = false;
  }
  function setProduct(p: dataType.product) {
    openModal();
    showProduct.value = p
  }
  defineExpose({ openModal, closeModal, setProduct });

  const props = defineProps<{ 
    setRelatedArticles: (productId:string) => void 
  }>()
  const setRelatedArticles = (productId:string|undefined) => {
    if(productId){
      props.setRelatedArticles(productId);
    }
  } 
</script>

<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 400px"
      title="Product Detail"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <!-- <h2>{{ showProduct?.id }}</h2> -->
        <n-button strong secondary circle  @click="closeModal">
          <template #icon>
            <n-icon><CloseIcon/></n-icon>
          </template>
        </n-button>
      </template>
      <div class="flex justify-center relative">
        <img :src="showProduct?.img"/>
        <span class="absolute bottom-0 right-2">
          <n-button strong secondary
            style="background-color: black; color:white;"
            @click="setRelatedArticles(showProduct?.id)">
            Seen In
          </n-button>
        </span>
      </div>
      
      <template #footer>
        <div class="text-center">
          <p v-html="showProduct?.content.replaceAll('\n', '<br>')"></p>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>
