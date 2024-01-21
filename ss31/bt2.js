function check(...arr){
    for(let a of arr){
        let max = -2/0;
        for(let i = 0; i<a.length;i++ ){
            if(max<a[i]){
                max = a[i];
            }
        }
        console.log(max);
    }
    
}
console.log(check([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
console.log(check([1, 2, 3, 4], [5, 1, 2, 9]));
console.log(check([]));