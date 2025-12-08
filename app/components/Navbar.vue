<script lang="ts" setup>
const route = useRoute()

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

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Function to check if a route is active
const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <nav class="sticky top-0 z-50 bg-primary-600 dark:bg-primary-800 shadow-lg">
    <!-- Main Navigation Bar -->
    <div class="flex items-center justify-between px-4 py-3">
      <!-- Brand/Logo -->
      <div class="flex items-center space-x-3">
        <NuxtLink 
          to="/" 
          :class="[
            'flex items-center space-x-3 transition-opacity duration-200 px-2 py-1 rounded-md',
            isActive('/') 
              ? 'opacity-100 bg-primary-700' 
              : 'hover:opacity-80'
          ]"
        >
          <img src="/bsa-logo.avif" alt="Bahari Sentosa Abadi Logo" class="h-8 w-8 rounded-full object-cover" />
          <span class="text-xl font-bold text-white">BSA</span>
        </NuxtLink>
      </div>

      <!-- Desktop Navigation Menu (Hidden on mobile) -->
      <div class="hidden md:flex flex-1 justify-center">
        <div class="flex space-x-8">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.label"
            :to="item.to"
            :class="[
              'transition-colors duration-200 font-medium px-3 py-2 rounded-md flex items-center gap-2',
              isActive(item.to) 
                ? 'text-secondary-200 bg-primary-700 border border-secondary-300' 
                : 'text-white hover:text-secondary-200 hover:bg-primary-700'
            ]"
          >
            <UIcon :name="item.icon" class="w-4 h-4" />
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- Right side: WhatsApp button + Mobile menu button -->
      <div class="flex items-center space-x-3">
        <!-- WhatsApp Contact Button (Hidden on mobile) -->
        <div class="hidden sm:block">
          <UButton
            :to="whatsappUrl"
            target="_blank"
            icon="mdi-whatsapp"
            color="secondary"
            variant="solid"
            class="rounded-full"
          >
            Hubungi Kami
          </UButton>
        </div>

        <!-- Mobile WhatsApp icon only (Visible on mobile) -->
        <div class="sm:hidden">
          <UButton
            :to="whatsappUrl"
            target="_blank"
            icon="mdi-whatsapp"
            color="secondary"
            variant="solid"
            size="sm"
            class="rounded-full"
          />
        </div>

        <!-- Mobile Menu Button (Only visible on mobile) -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary-200 hover:bg-primary-700 transition-colors duration-200"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <UIcon 
            :name="isMobileMenuOpen ? 'mdi-close' : 'mdi-menu'" 
            class="w-6 h-6" 
          />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu (Collapsible) -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 transform -translate-y-1"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-1"
    >
      <div 
        v-show="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden border-t border-primary-700 bg-primary-600 dark:bg-primary-800"
      >
      <div class="px-4 pt-2 pb-4 space-y-1">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.label"
          :to="item.to"
          @click="closeMobileMenu"
          :class="[
            'transition-colors duration-200 font-medium px-3 py-3 rounded-md flex items-center gap-3 w-full text-left',
            isActive(item.to) 
              ? 'text-secondary-200 bg-primary-700 border border-secondary-300' 
              : 'text-white hover:text-secondary-200 hover:bg-primary-700'
          ]"
        >
          <UIcon :name="item.icon" class="w-5 h-5" />
          {{ item.label }}
        </NuxtLink>
        
        <!-- WhatsApp button in mobile menu -->
        <div class="pt-3 border-t border-primary-700">
          <UButton
            :to="whatsappUrl"
            target="_blank"
            icon="mdi-whatsapp"
            color="secondary"
            variant="solid"
            class="w-full rounded-md"
            @click="closeMobileMenu"
          >
            Hubungi Kami via WhatsApp
          </UButton>
        </div>
      </div>
      </div>
    </Transition>
  </nav>
</template>