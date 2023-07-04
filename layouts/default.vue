<template>
  <v-layout>
    <template #page-header>
      <BlockHeader />
    </template>
    <template #page-content>
      <NuxtPage />
    </template>
    <template #page-footer>
      <BlockFooter />
    </template>
  </v-layout>
</template>

<script setup>
import BlockHeader from '@/components/BlockHeader.vue'
import BlockFooter from '@/components/BlockFooter.vue'
</script>
