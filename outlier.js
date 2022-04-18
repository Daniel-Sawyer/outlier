const outliner = (arr) => {
    let even = []
    let odd = []

    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            odd.push(arr[i])
        } else {
            even.push(arr[i])
        }
        // console.log(even,odd);
    }
    if(even.length > odd.length){
        return odd[0]

    }else 
    return even[0]
}

console.log(outliner([160, 3, 1719, 19, 11, 13, -21]));
console.log(outliner([2, 4, 0, 100, 4, 11, 2602, 36]));