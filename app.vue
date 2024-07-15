<script setup>
  useSeoMeta({
    title: 'Nuxt Todos + Deno KV',
    description:
      'A hosted demo showcasing Nuxt running on Deno Deploy using Deno KV + Watch feature.',
    ogSiteName: 'Nuxt Todos Deno KV',
    ogType: 'website',
    ogImage: 'https://nuxt-todos-kv.deno.dev/social-image.png',
    twitterImage: 'https://nuxt-guestbook.pages.dev/social-image.png',
    twitterCard: 'summary_large_image',
  })
</script>

<template>
  <header
    class="md:pt-4 flex items-center justify-center rounded-md py-12 bg-gray-400/5 md:rounded-full border-b md:border dark:border-gray-800"
  >
    <h1 class="font-bold text-black dark:text-white">Nuxt Todos + Deno KV</h1>
    <div>
      <UColorModeButton />
      <UButton
        to="https://github.com/atinux/nuxt-deno-kv"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
      />
    </div>
  </header>
  <UContainer>
    <UMain>
      <NuxtPage />
    </UMain>
  </UContainer>
  <UFooter
    class="md:pb-4"
    :ui="{
      bottom: {
        container:
          'bg-gray-400/5 md:rounded-full border-t md:border dark:border-gray-800',
      },
    }"
  >
    <template #left> Published under MIT License. </template>
    <template #right>
      <UButton
        to="https://x.com/Atinux"
        target="_blank"
        icon="i-simple-icons-x"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://github.com/atinux/nuxt-deno-kv"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
      />
    </template>
  </UFooter>
  <UNotifications />
</template>
