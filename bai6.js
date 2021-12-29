arr =[1,2,3]
function kiemTra(x) {
    for(let i = 0; i<arr.length; i++){
        if(arr.indexOf(x)==-1){
            alert(x + " ko co trong mang");
        }
        else{
            alert(x + " co trong mang");
        }
    }

}
kiemTra(4);