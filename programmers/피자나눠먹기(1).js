function solution(n) {
    var answer = 0;
    const piece = 7;
    answer = parseInt(n / piece) + (n % piece > 0 ? 1 : 0);
    return answer;
}

function solution2(n) {
    return Math.ceil(n / 7)
}