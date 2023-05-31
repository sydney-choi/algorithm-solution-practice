function solution(my_string, n) {
    var answer = '';
     answer = my_string.split("").map(item => item.repeat(n)).join("");
    return answer;
}

function solution2(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}