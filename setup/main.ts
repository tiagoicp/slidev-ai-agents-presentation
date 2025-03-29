import { defineAppSetup } from '@slidev/types'
import { createHead } from '@vueuse/head'

export default defineAppSetup(({ app }) => {
  const head = createHead()
  app.use(head)
})
