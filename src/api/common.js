import Axios from '@/utils/axios'

export const exampleApi = () => Axios({
  url: 'https://api.github.com',
  method: 'get'
})

export const exampleMock = () => Axios({
  url: 'https://example.mock',
  method: 'get'
})
