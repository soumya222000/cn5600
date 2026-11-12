[
  {
    '$match': {
      'gender': 'Female'
    }
  }, {
    '$group': {
      '_id': '$age', 
      'MinSalary': {
        '$min': '$salary'
      }, 
      'MaxSalary': {
        '$max': '$salary'
      }, 
      'AvgSalary': {
        '$avg': '$salary'
      }
    }
  }
]