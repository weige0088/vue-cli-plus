import Storage from '@/utils/storage'

export default {
  install(Vue, name = '$ls') {
    Object.defineProperty(Vue.prototype, name, { value: new Storage('local') })
  }
}
