function divisible(a) {
    return a.filter(x => (x % 2 === 0) && x  > 15).length
}

module.exports = divisible
