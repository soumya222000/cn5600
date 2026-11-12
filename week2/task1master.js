[
  {
    '$match': {
      'education': 'Master', 
      'age': {
        '$gte': 21
      }
    }
  }, {
    '$group': {
      '_id': '$maritalstatus', 
      'AvgAge': {
        '$avg': '$age'
      }, 
      'MinAge': {
        '$min': '$age'
      }, 
      'MaxAge': {
        '$max': '$age'
      }, 
      'AvgSalary': {
        '$avg': '$salary'
      }, 
      'MinSalary': {
        '$min': '$salary'
      }, 
      'MaxSalary': {
        '$max': '$salary'
      }
    }
  }
]