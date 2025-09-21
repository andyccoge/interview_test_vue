<script setup lang="ts">
  import type * as dataType from '../assets/dataType';

  const props = defineProps<{ 
    articleIdx: number;
    article: dataType.article;
    productMap: Record<string, dataType.product>;
    setProduct: (productId:string) => void;
  }>()
</script>

<template>
  <n-card :title="''" :key="'article_'+props.articleIdx">
    <template #cover>
      <div class="pb-[70%] bg-center bg-cover" :style="{backgroundImage:`url(${props.article.img})`}"></div>
    </template>
    <template #action>
      <div class="text-left">相關產品</div>
      <div class="grid gap-2 grid-cols-3">
        <template v-for="(productId, apIdx) in props.article.products">
          <a href="###" @click="props.setProduct(productId)">
            <img :src="props.productMap[productId]?.img" :key="'article_product_'+props.articleIdx+'-'+apIdx">
          </a>
        </template>
      </div>
    </template>
  </n-card>
</template>