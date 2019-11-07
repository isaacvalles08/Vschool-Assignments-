// const numArr = [2, 5, 100]


// function doubleNumbers(arr){
//     return arr.map(num => {
//         return num * 2 
//     })
//   }
  
//   console.log(doubleNumbers(numArr))

// const array = [2 , 5, 10]


// function stringItUp(arr){
//     return arr.map(num => {
//         return num.toString()
//     })
// }
//   console.log(stringItUp(array))

// const array = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// function capitalizeNames(arr){
//     return arr.map(name => {
//         return name[0].toUpperCase() + name.slice(1).toLowerCase()
//     })  
//   }
  
//   console.log(capitalizeNames(array)); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



// function namesOnly(arr){
    //     return arr.map(names => {
        //         return names.name
        //     })
        //   }
        
        //   console.log(namesOnly(people))
        
        
        // function makeStrings(arr){
            //   return  arr.map(canGo => {
                //   if(canGo.age >= 17){
                    //       return canGo.name + ' can go to to the matrix'
                    //   } else{
                        //       return canGo.name + ' is underaged'
                        //   }
                        //   })
                        // }
                        
                        // console.log(makeStrings(people))
      
// const people = [{name: "Angelina Jolie", age: 80},
//                 {name: "Eric Jones", age: 2},
//                 {name: "Paris Hilton", age: 5},
//                 {name: "Kayne West", age: 16},
//                 {name: "Bob Ziroll", age: 100}]

//     function readyToPutInTheDom(arr){
//             return arr.map(names => {
//                 return '<h1>' + names.name + '</h1>' + '<h2>' + names.age + '</h2>'
//             })
                

//     }
// // //     console.log(readyToPutInTheDom(people))

// // function doubleNumbers(arr){
// //     return arr.map(num => {
// //         return num * 2
// //     }
// //     )}
  
// //   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// // function stringItUp(arr){
// //     return arr.map(str  => {
// //         return str.toString()
// //     })
// //   }
  
// //   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// // function capitalizeNames(arr){
// //         return arr.map(names => {
// //             return names[0].toUpperCase() + names.slice(1).toLowerCase()
// //         })
// //   }
  
// //   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
// const people = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// //   function namesOnly(arr){
// //         return arr.map(names => {
// //             return names.name
// //         })
  
// //         [
// //       {
// //           name: "Angelina Jolie",
// //           age: 80
// //       },
// //       {
// //           name: "Eric Jones",
// //           age: 2
// //       },
// //       {
// //           name: "Paris Hilton",
// //           age: 5
// //       },
// //       {
// //           name: "Kayne West",
// //           age: 16
// //       },
// //       {
// //           name: "Bob Ziroll",
// //           age: 100
// //       }
// //   ])); 
 

// function makeStrings(arr){
//     return arr.map(names =>{
//         if(names.age >= 16){
//             return names.name + ' can go to the matrix'
//         }else{
//             return names.name + ' is underaged'
//         }
//     })
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["Angelina Jolie can go to The Matrix", 
//   // "Eric Jones is under age!!", 
//   // "Paris Hilton is under age!!", 
//   // "Kayne West is under age!!", 
//   // "Bob Ziroll can go to The Matrix"]