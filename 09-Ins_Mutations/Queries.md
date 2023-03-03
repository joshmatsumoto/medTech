query Schools {
  schools {
    _id
    name
    location
    studentCount
  }
}

mutation Mutation($name: String!, $location: String!, $studentCount: Int!) {
  addSchool(name: $name, location: $location, studentCount: $studentCount) {
    name
    location
    studentCount
  }
}


Set the following variables in the Query Variables panel:

  {
    "name": "Farley's School",
    "location": "Kittyville",
    "studentCount": 400
  }