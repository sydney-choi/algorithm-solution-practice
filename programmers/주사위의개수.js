function solution(box, n) {
    var answer = 0;
    answer = Math.floor(box[0] / n) *
    Math.floor(box[1] / n) *
    Math.floor(box[2] / n);
    return answer;
}

function solution2(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

}