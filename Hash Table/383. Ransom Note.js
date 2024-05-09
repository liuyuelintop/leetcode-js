/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magMap = new Map();  // 创建一个映射来存储magazine中每个字符及其出现次数

    // 遍历magazine中的每个字符
    for (let ch of magazine) {
        // 如果字符已存在于magMap中，则增加其计数，否则初始化计数为1
        magMap.set(ch, (magMap.get(ch) || 0) + 1);
    }

    // 遍历ransomNote中的每个字符
    for (let ch of ransomNote) {
        let count = magMap.get(ch); // 获取当前字符的计数
        if (!count) {
            // 如果字符在magMap中不存在或计数为0，则返回false
            return false;
        }
        // 将字符的计数减1
        magMap.set(ch, count - 1);
    }

    // 如果成功遍历完ransomNote而没有提前返回false，则返回true
    return true;
};


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const strArr = new Array(26).fill(0), 
        base = "a".charCodeAt();
    for(const s of magazine) {  // 记录 magazine里各个字符出现次数
        strArr[s.charCodeAt() - base]++;
    }
    for(const s of ransomNote) { // 对应的字符个数做--操作
        const index = s.charCodeAt() - base;
        if(!strArr[index]) return false;  // 如果没记录过直接返回false
        strArr[index]--;
    }
    return true;
};