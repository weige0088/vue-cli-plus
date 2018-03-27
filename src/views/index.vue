<template>
  <div class="index">
    Hello, World
  </div>
</template>

<script>
import { exampleApi, exampleMock } from '@/api/common'

export default {
  name: 'Index',

  created() {
    exampleApi()
      .then(response => {
        console.log('This is an example real api ↓')
        console.log(response.data)
      })

    exampleMock()
      .then(response => {
        console.log('This is an example mock api ↓')
        console.log(response)
      })
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100px;
  line-height: 100vh;
  text-align: center;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
}
</style>
