<script setup>
const productTypes = [
  {
    id: "refina",
    name: "Refined Salt - REFINA",
    description:
      "Garam murni berkualitas tinggi dengan teknologi refining modern",
    color: "primary",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    id: "washing",
    name: "Washing Salt",
    description: "Garam khusus untuk industri deterjen dan pembersih",
    color: "secondary",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

const products = [
  {
    id: "refina-ap",
    name: "Refined Salt REFINA - Aneka Pangan",
    type: "REFINA",
    category: "Aneka Pangan",
    description:
      "Garam murni berkualitas tinggi untuk industri makanan. Cocok untuk mi instan, bumbu masak, makanan kaleng, biskuit, dan produk pangan lainnya dengan standar kemurnian tinggi.",
    naclContent: "≥99.5%",
    colorScheme: "primary",
    image: "/refined-salt-food.png",
    iodiumVariants: ["Beryodium", "Non-Yodium"],
    packaging: ["25kg", "50kg"],
    badges: ["≥99.5% NaCl", "Food Grade", "Halal"],
    applications: "Mi Instan, Bumbu, Snack",
    grade: "Food Grade",
    certifications: ["SNI", "Halal"],
  },
  {
    id: "refina-nap",
    name: "Refined Salt REFINA - Non-Aneka Pangan",
    type: "REFINA",
    category: "Non-Aneka Pangan",
    description:
      "Garam murni untuk industri non-pangan seperti farmasi, kosmetik, kimia, tekstil, dan aplikasi industri presisi lainnya yang membutuhkan kemurnian tinggi.",
    naclContent: "≥99.5%",
    colorScheme: "primary",
    image: "/refined-salt-non-food.png",
    iodiumVariants: ["Beryodium", "Non-Yodium"],
    packaging: ["25kg", "50kg"],
    badges: ["≥99.5% NaCl", "Industrial Grade", "High Purity"],
    applications: "Farmasi, Kimia, Tekstil",
    grade: "Industrial",
    certifications: ["ISO 9001"],
  },
  {
    id: "refina-repacking",
    name: "Refined Salt REFINA - Repacking",
    type: "REFINA",
    category: "Repacking",
    description:
      "Garam murni khusus untuk kebutuhan pengemasan ulang (repacking). Diperkaya yodium sesuai standar untuk didistribusikan kembali ke berbagai channel penjualan.",
    naclContent: "≥99.5%",
    colorScheme: "primary",
    image: "/refined-salt-repack.png",
    iodiumVariants: ["Beryodium"],
    packaging: ["25kg", "50kg"],
    badges: ["≥99.5% NaCl", "Repacking Ready", "SNI Standard"],
    applications: "Retail, Distributor",
    grade: "Consumption Grade",
    certifications: ["SNI", "Halal"],
  },
  {
    id: "washing-ap",
    name: "Washing Salt - Aneka Pangan",
    type: "Washing Salt",
    category: "Aneka Pangan",
    description:
      "Garam untuk keperluan pencucian bahan makanan dan proses produksi pangan. Cocok untuk industri pengolahan daging, seafood, dan sayuran dengan standar food grade.",
    naclContent: "≥97%",
    colorScheme: "warning",
    image: "/washing-salt-food.png",
    iodiumVariants: ["Beryodium", "Non-Yodium"],
    packaging: ["25kg", "50kg"],
    badges: ["≥97% NaCl", "Food Processing", "Washing Grade"],
    applications: "Pengolahan Daging, Seafood",
    grade: "Food Processing",
    certifications: ["FSSC 22000"],
  },
  {
    id: "washing-nap",
    name: "Washing Salt - Non-Aneka Pangan",
    type: "Washing Salt",
    category: "Non-Aneka Pangan",
    description:
      "Garam untuk industri deterjen, sabun, pembersih, dan aplikasi pencucian non-pangan. Dengan dissolusi cepat dan kontrol partikel untuk performa optimal.",
    naclContent: "≥97%",
    colorScheme: "warning",
    image: "/washing-salt-non-food.png",
    iodiumVariants: ["Beryodium", "Non-Yodium"],
    packaging: ["25kg", "50kg"],
    badges: ["≥97% NaCl", "Detergent Grade", "Fast Dissolve"],
    applications: "Deterjen, Sabun",
    grade: "Detergent",
    certifications: ["ISO 14000"],
  },
  {
    id: "washing-repacking",
    name: "Washing Salt - Repacking",
    type: "Washing Salt",
    category: "Repacking",
    description:
      "Garam cuci khusus untuk kebutuhan pengemasan ulang (repacking). Diperkaya yodium untuk didistribusikan ke pasar retail dan distributor regional.",
    naclContent: "≥97%",
    colorScheme: "warning",
    image: "/washing-salt-repack.png",
    iodiumVariants: ["Beryodium"],
    packaging: ["25kg", "50kg"],
    badges: ["≥97% NaCl", "Repacking Ready", "Distribution Grade"],
    applications: "Retail, Distributor",
    grade: "Consumption Grade",
    certifications: ["SNI", "Halal"],
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section
      class="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-gray-800"
    >
      <div class="max-w-7xl mx-auto text-center">
        <h1
          class="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-600 dark:text-primary-400 font-heading leading-tight mb-6"
        >
          Katalog Produk Garam
        </h1>
        <p
          class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-body max-w-4xl mx-auto mb-12"
        >
          Solusi lengkap kebutuhan garam berkualitas tinggi untuk industri dan
          konsumsi dengan standar sertifikasi internasional
        </p>

        <!-- Product Types Overview -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            v-for="productType in productTypes"
            :key="productType.id"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div
              :class="`w-12 h-12 bg-${productType.color}-600 rounded-lg flex items-center justify-center mx-auto mb-4`"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="productType.icon"
                />
              </svg>
            </div>
            <h3
              :class="`text-lg font-bold text-${productType.color}-700 dark:text-${productType.color}-300 font-heading mb-2`"
            >
              {{ productType.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 font-body text-sm">
              {{ productType.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 font-heading mb-4"
          >
            Produk Unggulan Kami
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body"
          >
            Berbagai jenis garam berkualitas tinggi dengan sertifikasi
            internasional untuk memenuhi kebutuhan spesifik Anda
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div
            v-for="product in products"
            :key="product.id"
            :class="`group bg-linear-to-br from-${product.colorScheme}-50 to-${product.colorScheme}-100 dark:from-${product.colorScheme}-900/20 dark:to-${product.colorScheme}-800/20 rounded-2xl overflow-hidden border border-${product.colorScheme}-200 dark:border-${product.colorScheme}-700 hover:shadow-2xl transition-all duration-500`"
          >
            <div class="relative overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div
                :class="`absolute inset-0 bg-linear-to-t from-${product.colorScheme}-900/60 to-transparent`"
              ></div>
              <div class="absolute top-4 right-4">
                <UBadge
                  :color="product.colorScheme"
                  variant="solid"
                  size="xl"
                  >{{ product.type }}</UBadge
                >
              </div>
            </div>

            <div class="p-6">
              <h3
                :class="`text-xl font-bold text-${product.colorScheme}-700 dark:text-${product.colorScheme}-300 font-heading mb-3`"
              >
                {{ product.name }}
              </h3>
              <p
                class="text-gray-700 dark:text-gray-300 font-body mb-4 text-sm leading-relaxed"
              >
                {{ product.description }}
              </p>

              <div class="space-y-3 mb-4">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400 font-body"
                    >Varian Yodium:</span
                  >
                  <div class="flex gap-2">
                    <UBadge
                      v-for="variant in product.iodiumVariants"
                      :key="variant"
                      :color="variant === 'Beryodium' ? 'primary' : 'neutral'"
                      variant="soft"
                      size="xl"
                    >
                      {{ variant }}
                    </UBadge>
                  </div>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400 font-body"
                    >Kemasan:</span
                  >
                  <div class="flex gap-2">
                    <UBadge
                      v-for="size in product.packaging"
                      :key="size"
                      color="neutral"
                      size="xl"
                    >
                      {{ size }}
                    </UBadge>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-4">
                <UBadge
                  v-for="badge in product.badges"
                  :key="badge"
                  :color="product.colorScheme"
                  variant="soft"
                  size="xl"
                >
                  {{ badge }}
                </UBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Specifications Table -->
    <section
      class="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-3xl lg:text-4xl font-bold text-primary-700 dark:text-primary-300 font-heading mb-4"
          >
            Spesifikasi Produk
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-body"
          >
            Perbandingan detail spesifikasi teknis semua produk garam kami
          </p>
        </div>

        <div
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-primary-600 dark:bg-primary-700">
                <tr>
                  <th
                    class="px-6 py-4 text-left text-sm font-bold text-white font-heading"
                  >
                    Produk
                  </th>
                  <th
                    class="px-6 py-4 text-center text-sm font-bold text-white font-heading"
                  >
                    NaCl Content
                  </th>
                  <th
                    class="px-6 py-4 text-center text-sm font-bold text-white font-heading"
                  >
                    Kemurnian
                  </th>
                  <th
                    class="px-6 py-4 text-center text-sm font-bold text-white font-heading"
                  >
                    Aplikasi Utama
                  </th>
                  <th
                    class="px-6 py-4 text-center text-sm font-bold text-white font-heading"
                  >
                    Sertifikasi
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr
                  v-for="product in products"
                  :key="product.id"
                  class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td class="px-6 py-4">
                    <div
                      :class="`font-semibold text-${product.colorScheme}-700 dark:text-${product.colorScheme}-300 font-heading`"
                    >
                      {{ product.type }} -
                      {{
                        product.category === "Aneka Pangan"
                          ? "AP"
                          : product.category === "Non-Aneka Pangan"
                          ? "NAP"
                          : "Repacking"
                      }}
                    </div>
                    <div
                      class="text-sm text-gray-500 dark:text-gray-400 font-body"
                    >
                      {{
                        product.category === "Repacking"
                          ? "Pengemasan Ulang"
                          : product.category
                      }}
                    </div>
                  </td>
                  <td
                    :class="`px-6 py-4 text-center text-${product.colorScheme}-600 dark:text-${product.colorScheme}-400 font-semibold`"
                  >
                    {{ product.naclContent }}
                  </td>
                  <td class="px-6 py-4 text-center">
                    <UBadge
                      :color="product.colorScheme"
                      variant="soft"
                      size="xl"
                      >{{ product.grade }}</UBadge
                    >
                  </td>
                  <td
                    class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400 font-body"
                  >
                    {{ product.applications }}
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div class="flex flex-wrap gap-1 justify-center">
                      <UBadge
                        v-for="cert in product.certifications"
                        :key="cert"
                        :color="product.colorScheme"
                        variant="soft"
                        size="xl"
                      >
                        {{ cert }}
                      </UBadge>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-3xl lg:text-4xl font-bold text-primary-700 dark:text-primary-300 font-heading mb-6"
        >
          Butuh Konsultasi Produk?
        </h2>
        <p
          class="text-xl text-gray-600 dark:text-gray-400 font-body leading-relaxed mb-8"
        >
          Tim ahli kami siap membantu Anda memilih produk garam yang tepat
          sesuai kebutuhan spesifik industri Anda
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <UButton
            :to="`https://wa.me/6281330310676?text=Halo%20Bahari%20Sentosa%20Abadi,%20saya%20ingin%20konsultasi%20tentang%20produk%20garam%20yang%20sesuai%20untuk%20kebutuhan%20industri%20saya`"
            target="_blank"
            color="primary"
            size="xl"
            class="px-10 py-5 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"
              />
            </svg>
            Konsultasi Gratis
          </UButton>

          <div
            class="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-sm font-body"
              >Rekomendasi produk sesuai kebutuhan</span
            >
          </div>
        </div>

        <!-- Quick Contact Info -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-linear-to-br from-primary-500 to-secondary-500 rounded-lg mx-auto flex items-center justify-center mb-3"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h4
              class="text-lg font-semibold text-gray-800 dark:text-gray-200 font-heading mb-1"
            >
              Telepon
            </h4>
            <a
              href="https://wa.me/6281330310676?text=Halo%20Bahari%20Sentosa%20Abadi,%20saya%20ingin%20konsultasi%20tentang%20produk%20garam%20yang%20sesuai%20untuk%20kebutuhan%20industri%20saya"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 font-body text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              +62 813-3031-0676
            </a>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-linear-to-br from-secondary-500 to-primary-500 rounded-lg mx-auto flex items-center justify-center mb-3"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4
              class="text-lg font-semibold text-gray-800 dark:text-gray-200 font-heading mb-1"
            >
              Email
            </h4>
            <a
              href="mailto:baharisentosaa@gmail.com?subject=Konsultasi%20Produk%20Garam&body=Halo%20Tim%20Bahari%20Sentosa%20Abadi,%0A%0ASaya%20ingin%20konsultasi%20tentang%20produk%20garam%20yang%20sesuai%20untuk%20kebutuhan%20industri%20saya.%0A%0ATerima%20kasih."
              class="text-gray-600 dark:text-gray-400 font-body text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              baharisentosaa@gmail.com
            </a>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-linear-to-br from-primary-500 to-secondary-500 rounded-lg mx-auto flex items-center justify-center mb-3"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4
              class="text-lg font-semibold text-gray-800 dark:text-gray-200 font-heading mb-1"
            >
              Jam Operasional
            </h4>
            <p class="text-gray-600 dark:text-gray-400 font-body text-sm">
              Sen-Sab: 08:00-17:00
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
