function check(str,target ){
    return str.slice(-target.length) == target; 
}
let str ="Hello world";
let target = prompt("Nhap target:");
console.log(check(str,target));