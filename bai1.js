let arr = [1, 2, 3, 6];

function timso(arr) {
    let sum = 0;
    let tbc = 0;
    let number = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        tbc = sum / arr.length;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > tbc) {
            number.push(arr[i]);
        }
    }
    return number;


}

document.write(timso(arr))
