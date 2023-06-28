function solution(my_string) {
    return [...my_string].map(item => parseInt(item)).filter(item => !isNaN(item)).sort((a, b) => a - b);
}