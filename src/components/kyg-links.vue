<script lang="ts" setup>
const { redirects } = useAppConfig()
</script>

<template>
  <div class="flex w-full max-w-screen-sm flex-col items-center gap-6 px-4">
    <nuxt-link
      v-for="{name, href} in redirects"
      :key="name"
      :href="href"
      class="flex w-full rounded-full border border-gray-300 bg-white p-4 pl-10 text-base font-semibold shadow-sm hover:bg-gray-100 dark:border-transparent dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-300 dark:focus:outline-gray-500"
      external
      target="_blank"
    >
      {{ name }}
    </nuxt-link>
  </div>
</template>
