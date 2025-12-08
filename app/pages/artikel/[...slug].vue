<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-gray-800">
      <div class="max-w-4xl mx-auto">
        <article v-if="article" class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <!-- Article Header -->
          <div v-if="article.meta?.image" class="w-full aspect-video md:aspect-21/9 overflow-hidden">
            <img 
              :src="article.meta.image" 
              :alt="article.title"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="p-8">
            <!-- Article Meta -->
            <div class="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
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
              
              <!-- Title -->
              <h1 class="text-4xl md:text-5xl font-bold text-primary-700 dark:text-primary-300 font-heading mb-6 leading-tight">
                {{ article.title }}
              </h1>
              
              <!-- Description -->
              <p v-if="article.description" class="text-gray-700 dark:text-gray-300 mb-6 text-xl leading-relaxed font-body">
                {{ article.description }}
              </p>
              
              <!-- Meta info -->
              <div class="flex items-center text-gray-600 dark:text-gray-400 text-sm font-body">
                <span v-if="article.meta?.author" class="mr-4 flex items-center">
                  <svg class="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                  {{ article.meta.author }}
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg>
                  {{ formatDate(article.meta?.date) }}
                </span>
              </div>
            </div>
            
            <!-- Article Content -->
            <div class="prose prose-lg prose-gray dark:prose-invert max-w-none prose-h1:text-xl prose-h1:font-semibold prose-h1:text-primary-700 dark:prose-h1:text-primary-300 prose-h1:border-l-4 prose-h1:border-primary-500 prose-h1:pl-4 prose-h1:bg-primary-50 dark:prose-h1:bg-primary-900/20 prose-h1:py-2 prose-h1:rounded-r prose-h1:mt-6 prose-h1:mb-4 prose-h2:text-primary-600 dark:prose-h2:text-primary-400 prose-h3:text-secondary-600 dark:prose-h3:text-secondary-400">
              <ContentRenderer :value="article" />
            </div>
          </div>
        </article>
        
        <!-- Back to Articles -->
        <div class="mt-8 text-center">
          <UButton
            to="/artikel" 
            color="primary"
            size="lg"
            class="px-8 py-4 transform hover:scale-105 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Kembali ke Artikel
          </UButton>
        </div>
        
        <!-- Article Not Found -->
        <div v-if="!article" class="text-center py-12">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-200 dark:border-gray-700">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h1 class="text-2xl font-bold text-primary-700 dark:text-primary-300 font-heading mb-4">Artikel Tidak Ditemukan</h1>
            <p class="text-gray-600 dark:text-gray-400 font-body mb-8">Artikel yang Anda cari tidak dapat ditemukan atau mungkin telah dipindahkan.</p>
            <UButton
              to="/artikel" 
              color="primary"
              size="lg"
              class="px-8 py-4 transform hover:scale-105 transition-all duration-300"
            >
              Lihat Semua Artikel
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { params } = useRoute()
const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

// Query using new content collection API - content is at root level, not under /artikel/
const { data: article } = await useAsyncData(`article-${slug}`, () => 
  queryCollection('content').path(`/${slug}`).first()
)


// Format date function
const formatDate = (dateString) => {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return dateString
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    return dateString
  }
}

// Dynamic meta tags
useHead(() => ({
  title: article.value ? `${article.value.title} | Bahari Sentosa Abadi` : 'Artikel - Bahari Sentosa Abadi',
  meta: [
    {
      name: 'description',
      content: article.value?.description || 'Artikel dari Bahari Sentosa Abadi tentang industri garam dan produk berkualitas tinggi'
    },
    {
      name: 'keywords',
      content: article.value?.tags ? article.value.tags.join(', ') : 'artikel garam, industri garam, Bahari Sentosa Abadi'
    },
    {
      property: 'og:title',
      content: article.value ? `${article.value.title} | Bahari Sentosa Abadi` : 'Artikel - Bahari Sentosa Abadi'
    },
    {
      property: 'og:description',
      content: article.value?.description || 'Artikel dari Bahari Sentosa Abadi tentang industri garam dan produk berkualitas tinggi'
    },
    {
      property: 'og:image',
      content: article.value?.image ? `https://baharisentosaabadi.co.id${article.value.image}` : 'https://baharisentosaabadi.co.id/bsa-logo.avif'
    },
    {
      property: 'og:url',
      content: `https://baharisentosaabadi.co.id/artikel/${slug}`
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: article.value ? `${article.value.title} | Bahari Sentosa Abadi` : 'Artikel - Bahari Sentosa Abadi'
    },
    {
      name: 'twitter:description',
      content: article.value?.description || 'Artikel dari Bahari Sentosa Abadi tentang industri garam dan produk berkualitas tinggi'
    },
    {
      name: 'twitter:image',
      content: article.value?.image ? `https://baharisentosaabadi.co.id${article.value.image}` : 'https://baharisentosaabadi.co.id/bsa-logo.avif'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'author',
      content: article.value?.author || 'Bahari Sentosa Abadi'
    },
    {
      property: 'article:published_time',
      content: article.value?.date
    },
    {
      property: 'article:author',
      content: article.value?.author || 'Bahari Sentosa Abadi'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://baharisentosaabadi.co.id/artikel/${slug}`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.value?.title || '',
        "description": article.value?.description || '',
        "image": article.value?.image ? `https://baharisentosaabadi.co.id${article.value.image}` : 'https://baharisentosaabadi.co.id/bsa-logo.avif',
        "author": {
          "@type": "Organization",
          "name": article.value?.author || "Bahari Sentosa Abadi",
          "url": "https://baharisentosaabadi.co.id"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Bahari Sentosa Abadi",
          "logo": {
            "@type": "ImageObject",
            "url": "https://baharisentosaabadi.co.id/bsa-logo.avif"
          }
        },
        "datePublished": article.value?.date || '',
        "dateModified": article.value?.date || '',
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://baharisentosaabadi.co.id/artikel/${slug}`
        },
        "keywords": article.value?.tags ? article.value.tags.join(', ') : ''
      })
    }
  ]
}))
</script>