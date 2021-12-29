let arr = ["Hung", "Hu", "H"]

function dodainhonhat(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= arr[0].length) {
            min = arr[i];
        }


    }
    return min;
}

document.write(dodainhonhat(arr))
