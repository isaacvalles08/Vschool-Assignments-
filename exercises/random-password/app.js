// function randomPasswordGenerator(passLength) {
//     const password = [];
//     let randChar; 
//     for (let i = 0; i < passLength; i++){
//         randChar = String.fromCharCode(Math.round((Math.random() * 94) = 32));
//         password.push(randChar);
//     } 
//     return password.join("")
// }
// // console.log(randomPasswordGenerator(10))

// function randomPasswordGenerator(passLength) {
//     const password = [];
//     let randChar;
//     for (let i = 0; i < passLength; i++) {
//       randChar = String.fromCharCode(Math.round((Math.random() * 94) + 32));
//       password.push(randChar);
//     }
//     return password.join("");
//   }
  
//   randomPasswordGenerator(10);
const randomPassword = (num, str) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()?><,./\|}{][;:~'
    let password = ''
    if(str) str = str.split('')
    for(let i = 0; i < num; i++){
      if(str.length){
        let strIndex = Math.floor(Math.random()*str.length)
        password += str[strIndex]
        str.splice(strIndex, 1)
      }else {
        password += chars[Math.floor(Math.random()*chars.length)]
      }
    }
    return password
}
console.log(randomPassword(20, ''))