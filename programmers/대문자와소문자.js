function solution(my_string) {
    const answer = [];
    for (let i = 0; i < my_string.length; i++) {
        const upperRegex = /[A-Z]/g;
        if(my_string[i].match(upperRegex)) {
            answer.push(my_string[i].toLowerCase())
            
        } else {
            answer.push(my_string[i].toUpperCase())
        }
    }
    
    return answer.join("");
}