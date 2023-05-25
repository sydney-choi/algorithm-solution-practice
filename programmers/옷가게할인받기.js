function solution(price) {
    if (price >= 500000) {
        return parseInt(price - price * 0.2)
    } else if (price >= 300000) {
        return parseInt(price - price * 0.1)
    } else if (price >= 100000) {
        return parseInt(price - price * 0.05)
    }
    return price;
}

const discounts = [
    [500000, 20],
    [300000, 10],
    [100000,  5],
]

const solution = (price) => {
    for (const discount of discounts)
        if (price >= discount[0])
            return Math.floor(price - price * discount[1] / 100)
    return price
}