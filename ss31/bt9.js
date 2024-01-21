function sumZero(arr){
    let sumZeros = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if((i + j) === 0){
                sumZeros.push([arr[i], arr[j]]);
            }
        }
    }
    return sumZeros;
}
let arr = [-1, 0, 1, 2];
console.log(sumZero(arr));
