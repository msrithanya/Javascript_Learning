// ✅ Why you must return in map() even if you modify the array
// ✔ Reason 1: map() ALWAYS creates a NEW array

// map() is meant to transform each element into a new value and put that new value in a new array.

// So for every element, map() expects:

// return <new value>


// If you don’t return anything, it puts undefined in the new array.

// ✔ Reason 2: map() never cares what you do with the original array

// Even if you modify the original array (arr[i] = ...),
// map() still wants a returned value for the new array it is building.
// Task 1: Doubling Numbers

let arr=[1,2,3,4,5]

let arr2=arr.map((v)=>{
   c= v*2;
    return c
})
console.log(arr2)

// Task 2: Extracting Names

const people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];

  let arr3=people.map((v)=>{
    c=v.name
    return c
  })
  console.log(arr3)

//   Task 3: Formatting Prices
let arrf=[1,2,3,4,5]
let arr4=arrf.map((v)=>{
 c=`$ ${v}`
 return c
})
//
console.log(arr4)


