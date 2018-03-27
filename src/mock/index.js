import Mock from 'mockjs'
import Example from './example'

/**
 * The mock item's data format:
 * { url: '', type: '', config: '' }
 */
const mocks = [
  ...Example
]

mocks.map(({ url, type = 'get', config }) => {
  Mock.mock(url, type, config)
})

export default Mock
