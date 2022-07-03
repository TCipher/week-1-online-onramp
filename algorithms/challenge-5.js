function replaceDivisible(x, y) {
    let newArr = []
    for(i = 0; i < x.length; i++){
        if(x[i] % y != 0){
            newArr.push(x[i])
        }else{
            newArr.push("isDivisible")
        }
    }
    return newArr
}

module.exports = replaceDivisible
