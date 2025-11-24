<script setup>
// Query articles from content collection - try different methods
const { data: articles } = await useAsyncData('articles', async () => {
  try {
    // Try different methods since find() doesn't exist
    let allContent = await queryCollection('content').all()
    
    if (!allContent) {
      allContent = await queryCollection('content')
    }
    
    return Array.isArray(allContent) ? allContent : []
  } catch (error) {
    return []
  }
})

// Format date function
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Meta tags
useHead({
  title: 'Artikel - PT Bahari Sentosa Abadi',
  meta: [
    {
      name: 'description',
      content: 'Baca artikel terbaru tentang garam dan industri dari PT Bahari Sentosa Abadi'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-600 dark:text-primary-400 font-heading leading-tight mb-6">
          Artikel & Insights
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-body max-w-4xl mx-auto">
          Baca artikel terbaru tentang industri garam, tips bisnis, dan insights dari PT Bahari Sentosa Abadi
        </p>
      </div>
    </section>
    
    <!-- Articles Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 font-heading mb-4">
            Artikel Terbaru
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body">
            Dapatkan informasi terkini seputar industri garam dan berbagai tips berharga untuk bisnis Anda
          </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink 
            v-for="article in articles" 
            :key="article.path || article.id"
            :to="`/artikel${article.path}`"
            class="group bg-linear-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl overflow-hidden border border-primary-200 dark:border-primary-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
          >
            <div class="relative overflow-hidden">
              <img 
                v-if="article.meta?.image" 
                :src="article.meta.image" 
                :alt="article.title"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-linear-to-t from-primary-900/60 to-transparent"></div>
              <div class="absolute top-4 right-4">
                <UBadge color="primary" variant="solid" size="lg">Artikel</UBadge>
              </div>
            </div>
            
            <div class="p-6 flex flex-col h-full">
              <div class="grow">
                <h3 class="text-xl font-bold text-primary-700 dark:text-primary-300 font-heading mb-3">
                  {{ article.title }}
                </h3>
                <p class="text-gray-700 dark:text-gray-300 font-body text-sm leading-relaxed">
                  {{ article.description }}
                </p>
              </div>
              
              <div class="space-y-3 mt-4 pt-4 border-t border-primary-200 dark:border-primary-700">
                <span class="text-sm text-gray-600 dark:text-gray-400 font-body block">
                  {{ formatDate(article.meta?.date) }}
                </span>
                <div class="flex flex-wrap gap-2">
                  <UBadge 
                    v-for="tag in article.meta?.tags" 
                    :key="tag"
                    color="primary" 
                    variant="soft" 
                    size="lg"
                  >
                    {{ tag }}
                  </UBadge>
                </div>
                <div class="flex justify-end pt-2">
                  <div class="inline-flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors font-body">
                    Baca Selengkapnya
                    <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        
        <div v-if="!articles || articles.length === 0" class="text-center py-12">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-12 border border-gray-200 dark:border-gray-700">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 font-heading mb-4">Belum Ada Artikel</h3>
            <p class="text-gray-600 dark:text-gray-400 font-body">Artikel sedang dalam persiapan. Kembali lagi nanti untuk mendapatkan insights terbaru dari kami.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>