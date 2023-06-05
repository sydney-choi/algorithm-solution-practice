function solution(my_string) {
    var answer = 0;
    answer = my_string.split("").reduce((acc, cur) => {
        if(!isNaN(cur)) {
            return acc + Number(cur);
        }

        return acc;
    }, 0); 

    return answer;
}
