export default [
  {
    url: 'https://example.mock',
    type: 'get',
    config: {
      'user|1-3': [
        {
          'name': '@cname',
          'id|+1': 88,
          'age|18-28': 0,
          'birthday': '@date("yyyy-MM-dd")',
          'city': '@city(true)',
          'color': '@color',
          'isMale|1': true,
          'isFat|1-2': true,
          'brother|1': ['jack', 'jim'],
          'sister|+1': ['jack', 'jim', 'lily'],
          'friends|2': ['jack', 'jim']
        }
      ]
    }
  }
]
