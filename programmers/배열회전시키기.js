function solution(numbers, direction) {
    var answer = [];
    switch (direction) {
        case "right":
            const rNum = numbers[numbers.length - 1];
            numbers.pop();
            numbers.unshift(rNum)
            answer = numbers;
            break;
        case "left":
            const lNum = numbers[0];
            numbers.shift();
            numbers.push(lNum);
            answer = numbers;
            break;
    }
    return answer;
}

function solution(numbers, direction) {
  return direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}