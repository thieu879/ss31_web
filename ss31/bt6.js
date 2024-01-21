let nums = [1,2,3,4,5];
let a = nums.find(function(e){
    return e == 5;
});
function fakeFind(arr, fn){
    for (let i = 0; i < arr.length; i++){
         let test = fn(arr[i]);
         if ( test === true){
            return arr[i];
         }
    }
}
 let res1 = fakeFind(nums,function(e){
    return e==2;
})
let res2 = fakeFind(nums,function(e){
    return e!=2;
});
console.log(res1,res2);