let arr = [ 1,2,3]
function findMax(arr) {
    let Max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > Max) {
            Max = arr[i]
        }
    }
    return Max;

}
document.write(findMax(arr))