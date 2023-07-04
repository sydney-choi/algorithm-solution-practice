function solution(age) {
    var answer = '';
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const num = age.toString().split("");
    answer = num.map(item => alphabet[item]);

    return answer.join("");
}

function solution2(age) {
    return age
      .toString()
      .split("")
      .map((v) => "abcdefghij"[v])
      .join("");
  }
  