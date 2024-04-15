<script lang="ts" setup>
const $img = useImage()
useHead({
  htmlAttrs: {
    lang: 'ko-KR',
    dir: 'ltr',
  },

  link: [
    {
      rel: 'preconnect',
      href: 'https://dun.land',
    },

    {
      rel: 'icon',
      type: 'image/png',
      href: $img('profile.png', { width: 16, height: 16 }),
    },

    {
      rel: 'stylesheet',
      href: 'https://dun.land/x/pretendard@1.3.9/pretendard--variable.min.css',
    },
  ],
})

useSeoMeta({
  title: 'KYG.kr',
  description: '개인 랜딩페이지',
  ogImage: $img('background.png', { width: 1200, height: 630 }),
})
</script>

<template>
  <div class="flex h-dvh w-full flex-col items-center justify-center gap-10 bg-gray-50 px-2 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
    <kyg-aprill-16th />
    <kyg-header />
    <kyg-socials />
    <kyg-links />
    <kyg-footer />
  </div>
</template>
