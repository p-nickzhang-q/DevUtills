function transformStr(str) {
    var newStr = '';
    var arr = str.split(' '); //split是分隔字符串
    for (var i = 0; i < arr.length; i++) {
        var s = arr[i];
        if (i == 0) {
            newStr += s;
        } else {
            newStr += s.substr(0, 1).toLocaleUpperCase();
            newStr += s.substr(1, s.length - 1);
        }
    }

    return newStr;
}

console.log(transformStr('zhu chang dian hua '));