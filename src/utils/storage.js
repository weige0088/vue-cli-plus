import _ from 'lodash'

/**
 * const engine = new Storage('session')
 * engine.set('k1.k2', 'v1')
 * engine.get('k1.k2')
 * engine.unset('k1.k2')
 * engine.clear()
 */
class Storage {
  constructor(engine = 'local') {
    if (engine === 'local') {
      this.engine = window.localStorage
    } else if (engine === 'session') {
      this.engine = window.sessionStorage
    } else {
      throw new Error(`The storage's engine must be 'local' or 'session'`)
    }
  }

  get(path) {
    const { main, sub } = this.__resolveKey(path)

    return !sub
      ? this.__jsonGet(main)
      : _.get(this.__jsonGet(main), sub)
  }

  set(path, val) {
    const { main, sub } = this.__resolveKey(path)

    if (!sub) {
      this.__jsonSet(main, val)
    } else {
      let target = this.__jsonGet(main)

      // 如果原值不存在或原值不是对象，则将原值重新赋值为一个对象
      if (!target || !_.isObject(target)) {
        target = {}
      }

      // 重新更改值
      _.update(target, sub, val)

      // 压入更新后的数据
      this.__jsonSet(main, target)
    }
  }

  unset(path) {
    const { main, sub } = this.__resolveKey(path)

    if (!sub) {
      this.engine.removeItem(main)
    } else {
      // 获取原值
      let target = this.__jsonGet(main)
      // 删除原值后重新压入新值
      _.unset(target, sub)
      this.__jsonSet(main, target)
    }
  }

  clear() {
    this.engine.clear()
  }

  __resolveKey(path) {
    const keys = _.toPath(path)
    const main = _.head(keys)
    const sub = _.tail(keys).join()

    return { main, sub }
  }

  __jsonGet(key) {
    return JSON.parse(this.engine.getItem(key)) || null
  }

  __jsonSet(key, val) {
    this.engine.setItem(key, JSON.stringify(val))
  }
}

export default Storage
