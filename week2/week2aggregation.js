[
  {
    '$match': {
      'education': 'Bachelor', 
      'age': {
        '$gte': 21
      }
    }
  }, {
    '$group': {
      '_id': '$gender', 
      'Avg': {
        '$avg': '$age'
      }, 
      'MinAge': {
        '$min': '$age'
      }, 
      'MaxAge': {
        '$max': '$age'
      }, 
      'MaxSalary': {
        '$max': '$salary'
      }, 
      'MinSalary': {
        '$min': '$salary'
      }, 
      'AvgSalary': {
        '$avg': '$salary'
      }
    }
  }
]