function solution(my_string) {
    var answer = '';
    answer = my_string.replace(/['a','e','i','o','u']/g,'');
    return answer;
}

function solution2(my_string) {
    var answer = '';
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    answer = my_string.split('').filter((item) => !vowel.includes(item)).join('');
    return answer;
}