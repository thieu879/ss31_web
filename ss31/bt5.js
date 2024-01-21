function chiaMang(arr,n){
    let arr1 = [];
    for(let i = 0; i<arr.length;i++){
        arr1.push(arr.slice(i,i+n));
    }
    return arr1;
}
let arr =["a","b","c","d"];
let n = parseInt(prompt("Nhap n:"));
console.log(chiaMang(arr,n));