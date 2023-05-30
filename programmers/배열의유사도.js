function solution(s1, s2) {
    var answer = 0;
    s1.sort();
    s2.sort();
    s1.forEach(item => {
        if (s2.includes(item)) {
            answer++;
        } 
    })
    return answer;
}

function solution2(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}
