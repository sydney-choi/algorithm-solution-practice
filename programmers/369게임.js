function solution(order) {
    return [...String(order)].filter((v) => ["3", "6", "9"].includes(v)).length;
}

function solution2(order) {
    return [...order.toString().matchAll(/[3|6|9]/g)].length;
  }