const arr = [0,1,2,3,4,5,6,7,8,9,10]
const updatedArr = arr.filter(item => item > 5)
console.log(updatedArr)


// Find all possible values of the given array with min length
// Crazy solution
var combine = function(a, min) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}

console.log(combine([1,2,3,4,5,6,7],2))