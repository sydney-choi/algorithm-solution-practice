function solution(n) {
    let lcm =  n * 6 / gcd(n,6);
    return lcm / 6;
}

function gcd(a,b){ 
  return b ? gcd(b, a%b) : a; 
}

const solution2 = (n) => {
    let piece = 6;

    while(true) {
        if (piece % n === 0) {
            break;
        }
        piece += 6;
    }

    return piece / 6;
}
