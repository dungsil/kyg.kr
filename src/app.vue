<script lang="ts" setup>
const focusClasses = 'focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-300 dark:focus:outline-gray-500'
const socials = [
  {
    name: '깃허브',
    href: 'https://github.com/dungsil',
    icon: 'i-simple-icons-github',
    classes: 'bg-[#181717] dark:bg-white',
  },
  {
    name: '블루스카이',
    href: 'https://bsky.app/profile/dun.land',
    icon: 'i-simple-icons-bluesky',
    classes: 'bg-[#0285FF]',
  },
  {
    name: '트위터',
    href: 'https://twitter.com/dun__land',
    icon: 'i-simple-icons-twitter',
    classes: 'bg-[#1D9BF0]',
  },
]

const { redirects } = useAppConfig()
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
  <div class="flex h-dvh w-full flex-col items-center justify-center gap-10 bg-gray-50 px-2 text-gray-700 dark:bg-gray-900 dark:text-gray-200 ">
    <!-- 소개 -->
    <header class="space-y-2 text-center">
      <NuxtImg
        alt=""
        class="mx-auto mb-6"
        sizes="64px lg:128px"
        src="/profile.png"
      />

      <div class="flex flex-row items-baseline justify-center space-x-1">
        <h1 class="text-3xl font-bold leading-6 tracking-tight text-gray-800 dark:text-white">
          둥실
        </h1>
        <span class="text-sm font-medium uppercase text-gray-500 dark:text-gray-300">
          dungsil
        </span>
      </div>

      <p class="text-sm">
        모두가 안전하게 웹을 사용하는 세상을 꿈꿉니다.
        <span aria-hidden="true">💤</span>
      </p>
    </header>

    <!-- 소셜 링크 -->
    <div class="flex flex-row items-center justify-center gap-6">
      <nuxt-link
        v-for="{name, href, icon, classes} in socials"
        :key="name"
        :class="focusClasses"
        :href="href"
        class="inline-flex items-center rounded-md p-2.5 hover:bg-gray-100 dark:hover:bg-white/10 "
        external
        target="_blank"
      >
        <div class="sr-only">
          {{ name }}
        </div>

        <span
          :class="[icon, classes, 'size-6']"
          aria-hidden="true"
        />
      </nuxt-link>
    </div>

    <!-- 링크 모음 -->
    <div class="flex w-full max-w-screen-sm flex-col items-center gap-6 px-4">
      <nuxt-link
        v-for="{name, href} in redirects"
        :key="name"
        :class="focusClasses"
        :href="href"
        class="flex w-full rounded-full border border-gray-300 bg-white p-4 pl-10 text-base font-semibold shadow-sm hover:bg-gray-100 dark:border-transparent dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        external
        target="_blank"
      >
        {{ name }}
      </nuxt-link>
    </div>

    <!-- 푸터 -->
    <footer class="absolute inset-x-0 bottom-0 p-4 text-center text-xs leading-5 dark:border-gray-700">
      <p>
        프로필 이미지

        <nuxt-link
          class="font-medium underline"
          external
          href="https://twitter.com/7HD3M5L4"
          target="_blank"
        >
          불타입개구리(@7HD3M5L4){{ '' }}
        </nuxt-link>

        제공
      </p>
    </footer>
  </div>
</template>
