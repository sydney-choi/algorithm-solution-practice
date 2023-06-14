function solution(n, t) {
    var answer = 0;
    answer = n;
    for( let i = 0; i < t; i++ ) {
        answer = answer * 2;
    }
    return answer;
}

function solution2(n, t) {
    return n * Math.pow(2, t);
}