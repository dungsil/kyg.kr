<script lang="ts" setup>
import { useAprill16th } from '~/composables/useAprill16th'

const aprill16th = useAprill16th()

const triggerChangeAprill16thFont = () => {
  aprill16th.value = !aprill16th.value
}
</script>

<template>
  <div class="absolute top-5 right-5 cursor-pointer">
    <button aria-hidden="true" class="text-5xl" title="사월십육일체로 변환" @click="triggerChangeAprill16thFont">
      🎗️
    </button>
  </div>
</template>
