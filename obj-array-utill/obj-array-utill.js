/* 
参数1，对象数组
参数2，对象属性名数组
 */

function group(arr, groupPropertyNames) {
    const map = {};
    arr.forEach(item => {
        let key = groupPropertyNames.reduce((pv, cv, index) => {
            if (index === 0) {
                return item[cv];
            } else {
                return pv + '.' + item[cv];
            }
        }, '')
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(item);
    });
    return map;
}

function groupSum(arr, groupPropertyNames, sumPropertyNames) {
    let map = {};
    arr.forEach(item => {
        let key = groupPropertyNames.reduce((pv, cv, index) => {
            if (index === 0) {
                return item[cv];
            } else {
                return pv + '.' + item[cv];
            }
        }, '')
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(item);
    });

    let sumMap = {}
    Object.keys(map).forEach(key => {
        let groupArr = map[key];
        sumMap[key] = {};
        sumPropertyNames.forEach(sumPropertyName => {
            sumMap[key][sumPropertyName] = sum(groupArr, sumPropertyName);
        })
    })

    return sumMap;

}

function sum(arr, sumPropertyName) {
    return arr.reduce((pv, cv, index) => {
        return pv + (cv[sumPropertyName] ? cv[sumPropertyName] : 0);
    }, 0)
}

module.exports.groupSum = groupSum;
module.exports.sum = sum;
module.exports.group = group;