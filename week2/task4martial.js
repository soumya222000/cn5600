[
  {
    '$group': {
      '_id': {
        'gender': '$gender', 
        'maritalstatus': '$maritalstatus'
      }, 
      'count': {
        '$sum': 1
      }
    }
  }
]