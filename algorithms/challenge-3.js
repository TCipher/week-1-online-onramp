function isDivisbleByN(arr, n) {
    return arr.filter(x => x % n === 0)
}

module.exports = isDivisbleByN
