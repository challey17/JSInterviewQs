
// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
    {
      id: 1,
      name: "Jack",
      isActive: true,
      age: 20,
    },
    {
      id: 2,
      name: "John",
      isActive: true,
      age: 18,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
      age: 30,
    },
  ];
// 1. Write code to get array of names from given array of users

// .map() creates a NEW ARRAY populated with the results of calling a provided function on every element in the calling array.
// .map() iterates over the entire array and returns SOMETHING for each elemnt in array. You tell it what to do for each iteration

// The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
  const names = users.map(user => user.name)
  console.log(names)


// 2. Get back only active users

// .filter() returns a new array of all the values for which callbackFn returns a truthy value. 
// Array elements which do not pass the callbackFn test are not included in the new array.

  const activeUsers = users.filter(user => user.isActive)
  console.log('activeUsers', activeUsers)



// 3. Sort users by age descending oldest -> youngest

// .sort() MUTATES ORIGNAL ARRAY

// const sortedUsers = users.sort((user1, user2) => user1.age - user2.age)

// console.log('sortedUsers', sortedUsers)

const nonmumatedUsers = [...users];
nonmumatedUsers.sort((user1, user2) => user1.age - user2.age)

console.log(nonmumatedUsers)
