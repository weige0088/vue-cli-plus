import Storage from '@/utils/storage'

export default {
  install(Vue, name = '$ss') {
    Object.defineProperty(Vue.prototype, name, { value: new Storage('session') })
  }
}
