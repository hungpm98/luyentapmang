let arr = [ 1,2,3]
function findMin(arr) {
    let Min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < Min) {
            Min = arr[i]
        }
    }
    return Min;

}
document.write(findMin(arr))