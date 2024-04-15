import { useLocalStorage } from '@vueuse/core'

export const useAprill16th = () => {
  const check = useLocalStorage('font0416', false)

  if (process.client) {
    const $root = document.documentElement
    const className = 'font-["사월십육일"]'

    watchEffect(() => {
      if (check.value) {
        $root.classList.remove(className)
      } else {
        const $link = document.createElement('link')
        $link.type = 'text/css'
        $link.rel = 'stylesheet'
        $link.href = '/aprill16th.css'

        const $head = document.head
        $head.appendChild($link)

        $root.classList.add(className)
      }
    })
  }

  return check
}
