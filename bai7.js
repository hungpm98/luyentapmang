function printRepeating(arr) {
    let arr2=[];
    document.write("cac phan tu lap lai la:");
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]){
                if (arr2.indexOf(arr[i])!==-1){
                    continue;
                }
                arr2.push(arr[i])
            }

        }

    }
    document.write(arr2)
}

printRepeating([1,1,1,1,2,3,3,3])