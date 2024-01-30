const array = [ [1, 2, 3], [ 4, 5 ], [ 6 ] ];
function combineArrays(...args){
    let res=[];
    for(i of args){
        res.push(...i);
    }
    return res;
}
console.log(combineArrays(...array));