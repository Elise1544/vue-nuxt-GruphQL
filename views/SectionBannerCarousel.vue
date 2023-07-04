<template>
  <v-section :is-full="true" class="section-banner-carousel">
    <block-banner-carousel-list :list="banners" :loading="pending"></block-banner-carousel-list>
  </v-section>
</template>

<script setup>
import BlockBannerCarouselList from '@/components/BannerCarousel/BlockBannerCarouselList.vue'

const banners = ref([])
const pending = ref(false)
</script>
