<script lang="ts" setup>
const navigationItems = ref([
  {
    label: 'Visi & Misi',
    to: '/visimisi',
    icon: 'mdi-eye-outline'
  },
  {
    label: 'Tentang Kami',
    to: '/tentangkami',
    icon: 'mdi-information-outline'
  },
  {
    label: 'Produk',
    to: '/produk',
    icon: 'mdi-package-variant-closed'
  },
  {
    label: 'Artikel',
    to: '/artikel',
    icon: 'mdi-file-document-outline'
  }
])

const whatsappNumber = '+62123456789' // Replace with actual WhatsApp number
const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`
</script>

<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900 shadow-sm">
    <!-- Brand/Logo -->
    <div class="flex items-center space-x-2">
      <NuxtLink to="/" class="text-2xl font-bold">
        BSA
      </NuxtLink>
    </div>

    <!-- Centered Navigation Menu -->
    <div class="flex-1 flex justify-center">
      <UNavigationMenu :items="navigationItems" />
    </div>

    <!-- WhatsApp Contact Button -->
    <div>
      <UButton
        :to="whatsappUrl"
        target="_blank"
        icon="mdi-whatsapp"
        color="green"
        class="bg-green-500 hover:bg-green-600 text-white rounded-full"
      >
        Hubungi Kami
      </UButton>
    </div>
  </nav>
</template>