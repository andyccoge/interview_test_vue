<script setup lang="ts">
  import * as data from './assets/data';
  import type * as dataType from './assets/dataType';
  import { ref, reactive, computed } from 'vue';
  import ArticleCard from './components/ArticleCard.vue';
  import ModelProduct from './components/ModelProduct.vue';
  import ModelRelatedArticles from './components/ModelRelatedArticles.vue';
  import CircleProcess from './components/CircleProcess.vue';

  const articles = reactive<dataType.article[]>(data.articles);
  const products = reactive<dataType.product[]>(data.products);
  
  const productMap = computed(()=>{
    return products.reduce((map: Record<string, dataType.product>, current: dataType.product) => {
      map[current.id] = current;
      return map;
    }, {});
  });
  const productToArticlesMap = computed(() => {
    return articles.reduce((map: Record<string, dataType.article[]>, article) => {
      article.products.forEach(pid => {
        if (!map[pid]) {
          map[pid] = []
        }
        map[pid].push(article)
      })
      return map
    }, {});
  })

  const ModelProductRef = ref<InstanceType<typeof ModelProduct> | null>(null)
  const setProduct = (productId:string) => {
    const showProduct = productMap.value[productId];
    if(showProduct){ 
      ModelProductRef.value?.setProduct(showProduct);
      ModelRelatedArticlesRef.value?.closeModal();
    }
  }
  const openProductModel = () => {
    ModelProductRef.value?.openModal();
  }

  const ModelRelatedArticlesRef = ref<InstanceType<typeof ModelRelatedArticles> | null>(null)
  const setRelatedArticles = (productId:string) => {
    const showProduct = productMap.value[productId];
    const showrticles = productToArticlesMap.value[productId];
    if(showProduct){ 
      ModelRelatedArticlesRef.value?.setRelatedArticles(showProduct, showrticles);
      ModelProductRef.value?.closeModal();
    }
  }
</script>

<template>
  <!-- <CircleProcess :ratio="66"/> -->

  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <template v-for="(article, articleIdx) in articles">
      <ArticleCard :articleIdx="articleIdx"
                  :article="article"
                  :productMap="productMap"
                  :setProduct="setProduct"/>
    </template>
  </div>

  <ModelProduct 
    ref="ModelProductRef" 
    :setRelatedArticles="setRelatedArticles" />
  <ModelRelatedArticles 
    ref="ModelRelatedArticlesRef"
    :productMap="productMap"
    :setProduct="setProduct"
    :openProductModel="openProductModel" />
</template>

<style scoped>
</style>
