function highestSum(x, y) {
    let num = []
    let arr1 = x.reduce((a,b) => a + b,0)
    let arr2 = y.reduce((a,b) => a + b)
        num.push(arr1, arr2)
    return (Math.max(...num))
}

module.exports = highestSum