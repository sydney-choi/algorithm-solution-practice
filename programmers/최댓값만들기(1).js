function solution(numbers) {
    var answer = 0;
    numbers.sort((a, b) => a - b);
    answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    return answer;
}

// use destructuring and desc
function solution2(numbers) {
    let [a, b] = numbers.sort((a,b) => b - a);
    return a * b;
}