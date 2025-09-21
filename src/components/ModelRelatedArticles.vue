<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import type * as dataType from '../assets/dataType';
  import ArticleCard from '../components/ArticleCard.vue';
  import { Close as CloseIcon, ArrowBack as ArrowBackIcon } from '@vicons/ionicons5';
  const showModal = ref(false)
  const showProduct = ref<dataType.product | null>(null)
  const showArticles = reactive<dataType.article[]>([])

  const props = defineProps<{ 
    productMap: Record<string, dataType.product>;
    setProduct: (productId:string) => void;
    openProductModel: () => void;
  }>()

  function backToProduct(){
    closeModal();
    props.openProductModel();
  }

  function openModal(){
    showModal.value = true;
  }
  function closeModal(){
    showModal.value = false;
  }
  function setRelatedArticles(p: dataType.product, a: dataType.article[] | undefined) {
    openModal();
    showProduct.value = p;
    showArticles.splice(0);
    if(a){ showArticles.push(...a); }
  }
  defineExpose({ openModal, closeModal, setRelatedArticles });
</script>

<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 400px"
      title=""
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header>
        <div class="text-center">
          Product - Seen In
        </div>
      </template>
      <template #header-extra>
        <!-- <h2>{{ showProduct?.id }}</h2> -->
        <n-button strong secondary circle  @click="backToProduct" style="position: absolute; left: 10px;">
          <template #icon>
            <n-icon><ArrowBackIcon/></n-icon>
          </template>
        </n-button>

        <n-button strong secondary circle  @click="closeModal">
          <template #icon>
            <n-icon><CloseIcon/></n-icon>
          </template>
        </n-button>
      </template>
      <div class="flex justify-center relative">
        <img :src="showProduct?.img" class="max-w-1/2"/>
      </div>
      <hr class="my-4">
      <template v-for="(article, articleIdx) in showArticles">
        <ArticleCard :articleIdx="articleIdx" class="mb-2"
                    :article="article"
                    :productMap="props.productMap"
                    :setProduct="props.setProduct"/>
      </template>
    </n-card>
  </n-modal>
</template>