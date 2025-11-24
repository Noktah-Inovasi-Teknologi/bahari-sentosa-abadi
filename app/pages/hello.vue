<script setup>
// Query the hello content
const { data: hello } = await useAsyncData('hello', () => 
  queryCollection('content').path('/hello').first()
)

// If no content found, try different path variations
if (!hello.value) {
  const { data: helloAlt } = await useAsyncData('hello-alt', () => 
    queryCollection('content').where({ _path: { $contains: 'hello' } }).first()
  )
  hello.value = helloAlt.value
}

useSeoMeta({
  title: hello.value?.title || 'Hello Page',
  description: hello.value?.description || 'Hello page description'
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <ContentRenderer v-if="hello" :value="hello" />
        <div v-else class="text-center py-12">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Content Not Found</h1>
          <p class="text-gray-600 dark:text-gray-400">The content could not be loaded.</p>
          <NuxtLink to="/artikel/debug" class="text-blue-600 hover:text-blue-700">
            Debug content →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>