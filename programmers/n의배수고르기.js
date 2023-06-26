function solution(n, numlist) {
    var answer = [];
    return numlist.filter(item => item % n === 0);
}