function solution(rsp) {
    var answer = '';
    answer = rsp.split("").map(item => {
        if(item === '2') {
            return '0';
        } else if(item === '0') {
            return '5';
        } 
            return '2';
    }).join('');
    return answer;
}

function solution2(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}