function solution(my_string, letter) {
    var answer = '';
    const array = my_string.split("");
    answer = array.filter(item => item !== letter).join("");
    return answer;
}

function solution2(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

/*
 * split()
 * split(separator)
 * split(separator, limit)
 * 문자열에서 separator가 등장하면 해당 부분은 삭제되고 남은 문자열이 배열로 반환된다.
 * separator가 등장하지 않거나 생략되었을 경우 배열은 원본 문자열을 유일한 원소로 가진다.
 * separator가 빈 문자열일 경우, str은 문자열의 모든 문자를 원소로 가지는 배열로 변환된다.
 * separator가 원본 문자열의 처음이나 끝에 등장할 경우 반환되는 배열도 빈 문자열로 시작하거나 끝난다.
 * 그러므로 원본 문자열에 separator 하나만이 포함되어 있을 경우 빈 문자열 두 개를 원소로 가지는 배열이 반환된다.
 */