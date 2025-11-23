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

const whatsappNumber = '+62 813-3031-0676'
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[+\-\s]/g, '')}?text=Halo,%20saya%20tertarik%20dengan%20produk%20Anda`
</script>

<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-navy-600 dark:bg-navy-800 shadow-lg">
    <!-- Brand/Logo -->
    <div class="flex items-center space-x-3">
      <NuxtLink to="/" class="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
        <img src="/bsa-logo.avif" alt="Bahari Sentosa Abadi Logo" class="h-8 w-8 rounded-full object-cover" />
        <span class="text-xl font-bold text-white">BSA</span>
      </NuxtLink>
    </div>

    <!-- Centered Navigation Menu -->
    <div class="flex-1 flex justify-center">
      <div class="flex space-x-8">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.label"
          :to="item.to"
          class="text-white hover:text-teal-200 transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-navy-700 flex items-center gap-2"
        >
          <UIcon :name="item.icon" class="w-4 h-4" />
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>

    <!-- WhatsApp Contact Button -->
    <div>
      <UButton
        :to="whatsappUrl"
        target="_blank"
        icon="mdi-whatsapp"
        color="success"
        variant="solid"
        class="rounded-full"
      >
        Hubungi Kami
      </UButton>
    </div>
  </nav>
</template>