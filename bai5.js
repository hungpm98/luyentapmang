let arr = [1,2,3,4]
function tongChan(arr) {
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%2==0){
            sum += arr[[i]];
        }

    }
    return sum;
    
}
document.write(tongChan(arr))