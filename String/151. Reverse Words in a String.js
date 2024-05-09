var reverseWords = function(s) {
    // 字符串转数组
    const strArr = Array.from(s);
    // 移除多余空格
    removeExtraChar(strArr, " ")
    // 翻转整个字符串
    reverse(strArr, 0, strArr.length - 1);
    
    let start = 0;
    for(let i = 0; i <= strArr.length; i++){
        if (i === strArr.length || strArr[i] === ' ') {
            reverse(strArr, start, i - 1);
            start = i + 1;
        }
    }
    return strArr.join('');
};

// 删除多余字符
var removeExtraChar = (strArr, ch) => {
    let slow = 0;
    let fast = 0;
    while (fast < strArr.length) {
        if (strArr[fast] === ch && (fast === 0 || strArr[fast - 1] === ch)) {
            fast++;
        } else {
            strArr[slow++] = strArr[fast++];
        }
    }
    strArr.length = strArr[slow - 1] === ch ? slow - 1 : slow;
}

var reverse = (strArr, start, end) => {
    let l = start, r = end;
    while (l < r) {
        [strArr[l], strArr[r]] = [strArr[r], strArr[l]];
        l++;
        r--;
    }
}
