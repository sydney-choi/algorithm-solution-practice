function solution(today, terms, privacies) {
    var answer = [];
    // 약관 정보를 처리하기 쉽게 객체로 변환
    const termsObj = {};
    terms.forEach(term => {
        const termDetails = term.split(' ');
        let key = termDetails[0];
        let value = termDetails[1];
        
        termsObj[key] = value;
        return termsObj;
    });
    
    let todayArr = today.split(".");
    let todayDate = todayArr.join('/');
    // 개인 정보를 확인하며 조건과 맞는 정보일 경우 answer배열에 삽입
    privacies.forEach((privacy, index) => {
    const privacyArr = privacy.split(' ');
    let expirationPeriod = termsObj[privacyArr[1]];
    let collectionDate = privacyArr[0].split(".");

    // 최대 보관 가능한 년,월을 계산
    const collectableMonth = parseInt(collectionDate[1]) + parseInt(expirationPeriod);
    if (collectableMonth > 12){
        // check. collectableMonth가 12로 나누어 떨어지는 경우를 생각해보기
        collectionDate[1] = collectableMonth % 12;
        // check. 무조건 1을 더하는건 아닌듯. 유효기간이 100년인 경우를 생각해보기
        collectionDate[0] = parseInt(collectionDate[0]) + 1;
    } else {
        collectionDate[1] = collectableMonth;
    }
    
    // 최대 보관 가능한 일을 계산
    const collectableDay = parseInt(collectionDate[2]) - 1;
    if(collectableDay < 1) {
        collectionDate[2] = 28;
    } else {
        collectionDate[2] = collectableDay;
    }

    // 최대 보관 가능한 날짜와 오늘 날짜를 비교
    collectionDate = collectionDate.join('/');

    const cDate = new Date(collectionDate);
    const tDate = new Date(todayDate);
    if(cDate < tDate) {
        answer.push(index + 1);
    }
});
    
    return answer;
}