function dem(str){
    let tu = str.split(' ');
    let tuDaiNhat=tu[0];
    for(let i = 1;i<tu.length;i++){
        if(tuDaiNhat.length<tu[i].length){
            tuDaiNhat=tu[i];
        }
    }
    return [tuDaiNhat,tuDaiNhat.length];
}
let str = "The quick brown fox jumped over the lazy dog";
console.log(dem(str));