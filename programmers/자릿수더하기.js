function solution(n) {
    var answer = 0;
    const numberToString = n.toString();
    for (var i = 0; i < numberToString.length; i++) {
        var number = numberToString[i];
        answer += parseInt(number);
    }
    return answer;
}

function solution2(n) {
    return n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
  }