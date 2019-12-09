// function total(arr) {
//         return arr.reduce((final, num) => {
//             final = final + num
//             return final
//         })
//  }
 
//  console.log(total([1,2,3])); // 6
 

// function stringConcat(arr) {
//     return arr.reduce((final, num) => {
//         final = arr.join('')
//         return final
//     },[]) 
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"

//     function totalVotes(arr) {
//     return arr.reduce((final, voter) => {
//         if(voter.voted === true ){
//           final++
//         }
//         return final
//     },0)
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7

// function shoppingSpree(arr) {
//         return arr.reduce((final, item) => {
//          return final + item.price
//         },0)    
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
    return arr.reduce((final, arrayItems) =>{
        return final.concat(arrayItems)
    })    
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//    return arr.reduce((final, voter) => {
//        if(voter.age >= 25 && voter.voted){
//            return final.youngVotes++
//        }else if(voter.age >= 26 && voter.age <= 35 && voter.voted){
//             return final.midVotes++
//        }else if(voter.age >=36 && voter.age <= 55 && voter.voted){
//            return final.oldVotes++
//        } 
//    },{youngVotes:0, youth:0, midVotes:0, mids:0, oldVotes:0, olds:0})
// }

// console.log(voterResults(voters)); // Returned value shown below:
// /*
// { youngVotes: 1,
//   youth: 4,
//   midVotes: 3,
//   mids: 4,
//   oldVotes: 3,
//   olds: 4 
// }
// */

// function total(arr) {
//     return arr.reduce(function(final, num){
//         return final + num
//     }, 0)
//  }
 
//  console.log(total([1,2,3])); // 6

// function stringConcat(arr) {
//     return arr.reduce(function(final, str){
//      final = arr.join("")
//      return final
//     }, [])
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"
// function totalVotes(arr) {
//     return arr.reduce(function(final, voter){
//         if(voter.voted === true){
//             final++
//         }return final
//     }, 0)
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7
// function shoppingSpree(arr) {
//     return arr.reduce(function(final, num){
//        return  final + num.price 
//     }, 0)
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005
// function flatten(arr) {
//     return arr.reduce(function(final, num){
//         return final.concat(num)
//     }, [])
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
// //  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
// //     {name: 'Zack', age: 19, voted: false}
// // ];

// // function voterResults(arr) {
// //    return arr.reduce(function(final, voter){
// //     if(voter.age > 25){
// //         youthAge++
// //     }
// //    }, youthAge = 0, )
// // }

// // console.log(voterResults(voters)); // Returned value shown below:
// // /*
// { youngVotes: 1,
//   youth: 4,
//   midVotes: 3,
//   mids: 4,
//   oldVotes: 3,
//   olds: 4 
// }
// */