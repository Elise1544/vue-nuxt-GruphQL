<template>
  <v-section :is-full="true" class="section-banner-carousel">
    <!-- <block-banner-carousel-list :banners="banners" :loading="pending"></block-banner-carousel-list> -->
    <block-banner-carousel-list
      :banners="BannerAdapter.getBanners(banners)"
      :loading="pending"
    ></block-banner-carousel-list>
  </v-section>
</template>

<script setup>
import BlockBannerCarouselList from '@/components/BannerCarousel/BlockBannerCarouselList.vue'
// import { onBeforeMount } from 'vue'

const root = useNuxtApp()
const { banner: BannerService } = root.$services
//
const { banner: BannerAdapter } = root.$adapters

// const banners = ref([])
// const pending = ref(false)

// onBeforeMount(async () => {
//   banners.value = await BannerService.getBanners()
//   pending.value = false
// })

const { data: banners, pending } = useAsyncData(() => {
  return BannerService.getBanners()
})
</script>

<style lang="scss" scoped>
.section-banner-carousel {
  position: relative;
  padding: 0;
  overflow-x: hidden;
}
</style>
