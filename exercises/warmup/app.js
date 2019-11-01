var arr = [1,2,3,4,5,6,7,8,9,10]
function multiplier(){
for (i = 0; i < arr.length; i++){
    arr[i] = [];
    for(j = 0; j < arr.length; j++){
        arr[i][j] = (i + 1) * (j + 1); 
    }
}
return arr
}
console.log(multiplier())


