<template>
  <div>
    <section-banner-carousel />
    <section-products v-bind="productsColdSnacksData" />
    <section-products v-bind="productsHotSnacksData" />
    <section-products v-bind="productsMeatData" />
  </div>
</template>

<script setup>
import SectionBannerCarousel from '@/views/SectionBannerCarousel.vue'
import SectionProducts from '@/views/SectionProducts.vue'

console.log('index')

const root = useNuxtApp()
const { products: productsEnum, banners: bannersEnum } = root.$configs.enums

const bannersData = ref({
  dataSettings: {
    needSlider: true,
    bannersArea: bannersEnum.main.code
  }
})

const productsColdSnacksData = ref({
  sectionSettings: {
    title: 'Холодные закуски'
  },
  dataSettings: {
    needSlider: true,
    productsCode: productsEnum.cold.code
  }
})

const productsHotSnacksData = ref({
  sectionSettings: {
    title: 'Горячие закуски'
  },
  dataSettings: {
    needSlider: true,
    productsCode: productsEnum.hot.code
  }
})

const productsMeatData = ref({
  sectionSettings: {
    title: 'Мясные блюда'
  },
  dataSettings: {
    needSlider: true,
    productsCode: productsEnum.meat.code
  }
})
</script>
