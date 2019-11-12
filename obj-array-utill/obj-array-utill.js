/* 
参数1，对象数组
参数2，对象属性名数组
 */

function group(arr, groupPropertyNames) {
    const map = {};
    arr.forEach(item => {
        let key = groupPropertyNames.reduce((pv, cv, index) => {
            var cvArr = cv.split('.');
            var value = item;
            cvArr.forEach(k => {
                value = value[k];
                if (!value) {
                    console.error(`Object ${JSON.stringify(item)} 的 ${cvArr} 不存在`);
                }
            })
            if (index === 0) {
                return value;
            } else {
                return pv + '.' + value;
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
            //$count, 计算分组里的个数
            if (sumPropertyName === '$count') {
                sumMap[key]['$count'] = groupArr.length;
            } else {
                sumMap[key][sumPropertyName] = sum(groupArr, sumPropertyName);
            }
        })
    })

    return sumMap;

}

function sum(arr, sumPropertyName) {
    return arr.reduce((pv, cv, index) => {
        return pv + (cv[sumPropertyName] ? cv[sumPropertyName] : 0);
    }, 0)
}

function containSameElement(arr, groupPropertyName) {
    //根据属性分组，如果map的keys，与输入数组长度不同，说明有重复的
    //该方法返回元素重复的属性
    let map = group(arr, [groupPropertyName]);

    if (Object.keys(map).length === arr.length) {
        return [];
    } else {
        return Object.keys(map).filter(key => map[key].length > 1);
    }
}

function sortObjectByProperties(arr, groupPropertyNames, sortRuleFunction) {
    let map = group(arr, groupPropertyNames);
    let result = [];
    Object.keys(map).sort(sortRuleFunction).forEach(key => {
        result = result.concat(map[key]);
    })
    return result;
}

module.exports.trimJsonKey = (json) => {
    return json.map(item => {
        var newItem = {};
        Object.keys(item).forEach(k => {
            newItem[k.trim()] = item[k];
        });
        return newItem;
    })
}

//trim json对象的value
function trimJsonValue(json) {
    if (Object.prototype.toString.call(json) === '[object Array]') {
        this.trimArrayValue(json);
    } else {
        //json 是map
        this.trimObjectValue(json);
    }
}

function trimObjectValue(item) {
    Object.keys(item).forEach(k => {
        if (Object.prototype.toString.call(item[k]) === '[object String]') {
            item[k] = item[k].trim()
        } else if (Object.prototype.toString.call(item[k]) === '[object Object]') {
            //item 是Object
            this.trimObjectValue(item[k]);
        } else if (Object.prototype.toString.call(item[k]) === '[object Array]') {
            this.trimArrayValue(item[k]);
        }
    });
}

function trimArrayValue(arr) {
    arr.forEach((item, index) => {
        if (Object.prototype.toString.call(item) === '[object String]') {
            arr[index] = item.trim();
        } else if (Object.prototype.toString.call(item) === '[object Object]') {
            //item 是Object
            this.trimObjectValue(item);
        }
    })
}

//数组1包含数组2，并且元素顺序一样，转换成字符串比较最为省力
function containArray(arr1, arr2) {
    if (arr1.join().indexOf(arr2.join()) === -1) {
        return false;
    } else {
        return true
    }
}

module.exports.trimArrayValue = trimArrayValue;
module.exports.trimObjectValue = trimObjectValue;
module.exports.trimJsonValue = trimJsonValue;
module.exports.containSameElement = containSameElement;
module.exports.groupSum = groupSum;
module.exports.sum = sum;
module.exports.group = group;
module.exports.sortObjectByProperties = sortObjectByProperties;
module.exports.containArray = containArray;