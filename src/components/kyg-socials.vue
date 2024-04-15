<script lang="ts" setup>
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
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-6">
    <nuxt-link
      v-for="{name, href, icon, classes} in socials"
      :key="name"
      :href="href"
      class="inline-flex items-center rounded-md p-2.5 hover:bg-gray-100 dark:hover:bg-white/10 focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-300 dark:focus:outline-gray-500"
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
</template>
