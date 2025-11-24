<template>
  <div class="p-8">
    <h1>Debug Content</h1>
    
    <div class="mt-4">
      <h2>All Content:</h2>
      <pre class="bg-gray-100 p-4 text-sm overflow-auto">{{ JSON.stringify(allContent, null, 2) }}</pre>
    </div>
    
    <div class="mt-4">
      <h2>Hello Content:</h2>
      <pre class="bg-gray-100 p-4 text-sm overflow-auto">{{ JSON.stringify(helloContent, null, 2) }}</pre>
    </div>
    
    <div class="mt-4">
      <h2>Error (if any):</h2>
      <pre class="bg-gray-100 p-4 text-sm overflow-auto">{{ errorMsg }}</pre>
    </div>
  </div>
</template>

<script setup>
const allContent = ref(null)
const helloContent = ref(null)
const errorMsg = ref('')

try {
  // Test different content queries
  const { data: content1 } = await useAsyncData('all-content', async () => {
    const result = await queryCollection('content').find()
    return result
  })
  allContent.value = content1.value

  const { data: content2 } = await useAsyncData('hello-content', () => 
    queryCollection('content').path('/hello').first()
  )
  helloContent.value = content2.value

} catch (error) {
  errorMsg.value = error.message
}
</script>