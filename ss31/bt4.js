function rutGon(str,n){
    if(str.length>n){
        return str.slice(0,n) + '...';
    }else{
        return str;
    }
}
let str = "Hello world, I’m Peter";
let n = parseInt(prompt("Nhap n:"))
console.log(rutGon(str,n));