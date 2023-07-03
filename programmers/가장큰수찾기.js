function solution(array) {
    const maxNumber = Math.max(...array);
    const index = array.findIndex(item => item === maxNumber);
    return [maxNumber, index];
}

function solution2(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}