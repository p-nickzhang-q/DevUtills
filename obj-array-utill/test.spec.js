const Utill = require('./obj-array-utill');


function testSum() {
    var data = [{
            tableName: 'weight',
            type: 'INTEGER',
            num: 10
        },
        {
            tableName: 'create_time',
            type: 'BIGINT',
            num: 10
        },
        {
            tableName: 'create_user_id',
            type: 'BIGINT',
            num: 10
        },
        {
            tableName: 'update_time',
            type: 'BIGINT',
            num: 10
        },
        {
            tableName: 'update_user_id',
            type: 'BIGINT',
            num: 10
        }
    ]
    console.log(Utill.sum(data, 'num'));
}

function testGroupSum() {
    var data = [{
            tableName: 'weight',
            type: 'INTEGER',
            num: 10,
            num1: 10
        },
        {
            tableName: 'create_time',
            type: 'BIGINT',
            num: 10,
            num1: 10
        },
        {
            tableName: 'create_user_id',
            type: 'BIGINT',
            num: 10,
            num1: 10
        },
        {
            tableName: 'update_time',
            type: 'BIGINT',
            num: 10,
            num1: 10
        },
        {
            tableName: 'update_user_id',
            type: 'BIGINT',
            num: 10,
            num1: 10
        }
    ]
    var map = Utill.groupSum(data, ['type'], ['num', 'num1'])
    console.log(JSON.stringify(map));
}

function testContainSameElement() {
    var data = [{
            tableName: 'weight',
            type: 'INTEGER',
            num: 10,
            num1: 10
        },
        {
            tableName: 'create_time',
            type: 'BIGINT',
            num: 10,
            num1: 10
        },
        {
            tableName: 'create_user_id',
            type: 'BIGINT',
            num: 10,
            num1: 10
        },
        {
            tableName: 'update_time',
            type: 'BIGINT',
            num: 10,
            num1: 10
        },
        {
            tableName: 'update_user_id',
            type: 'BIGINT',
            num: 10,
            num1: 10
        }
    ]
    var arr = Utill.containSameElement(data, ['tableName'])
    console.log(JSON.stringify(arr));
}

function testSortObjectByProperties() {
    var arr = [{
            "manufactureOrderId": "5d0371c560a2370db0f79494",
            "typeCode": "纯黑",
            "typeName": "121",
            "orderedQuantity": 0,
            "packagesQuantity": 0,
            "packagesCount": 0,
            "name": "test-zh2",
            "size": "L",
            "color": "纯黑"
        },
        {
            "manufactureOrderId": "5d0371c560a2370db0f79494",
            "typeCode": "纯黑",
            "typeName": "121",
            "orderedQuantity": 0,
            "packagesQuantity": 0,
            "packagesCount": 0,
            "name": "test-zh2",
            "size": "L",
            "color": "白"
        },
        {
            "manufactureOrderId": "5d0371c560a2370db0f79494",
            "typeCode": "纯黑",
            "typeName": "121",
            "orderedQuantity": 0,
            "packagesQuantity": 0,
            "packagesCount": 0,
            "name": "test-zh2",
            "size": "L",
            "color": "浅灰"
        },
        {
            "manufactureOrderId": "5d0371c560a2370db0f79494",
            "typeCode": "纯黑",
            "typeName": "121",
            "orderedQuantity": 0,
            "packagesQuantity": 0,
            "packagesCount": 0,
            "name": "test-zh2",
            "size": "L",
            "color": "浅灰"
        },
        {
            "manufactureOrderId": "5d0371c560a2370db0f79494",
            "typeCode": "白",
            "typeName": "122",
            "orderedQuantity": 0,
            "packagesQuantity": 0,
            "packagesCount": 0,
            "name": "test-zh2",
            "size": "S",
            "color": "白"
        },
        {
            "manufactureOrderId": "5d0371c560a2370db0f79494",
            "typeCode": "深灰",
            "typeName": "123",
            "orderedQuantity": 0,
            "packagesQuantity": 0,
            "packagesCount": 0,
            "name": "test-zh2",
            "size": "M",
            "color": "深灰"
        },
        {
            "manufactureOrderId": "5d0371c560a2370db0f79494",
            "typeCode": "浅灰",
            "typeName": "124",
            "orderedQuantity": 0,
            "packagesQuantity": 0,
            "packagesCount": 0,
            "name": "test-zh2",
            "size": "XL",
            "color": "浅灰"
        }
    ];
    arr = Utill.sortObjectByProperties(arr, ['size', 'color'], (a, b) => {
        //S,M,L,XL,XXL,XXL, 衣服尺码排序
        a = new String(a.split('.')[0]).toUpperCase();
        b = new String(b.split('.')[0]).toUpperCase();
        if (a.length === 1 && b.length === 1) {
            switch (a) {
                case 'S':
                    if (b === 'S') {
                        return 0;
                    } else {
                        return -1;
                    }
                case 'M':
                    if (b === 'S') {
                        return 1;
                    } else if (b === 'L') {
                        return -1;
                    } else {
                        return 0;
                    }
                case 'L':
                    if (b === 'L') {
                        return 0;
                    } else {
                        return 1;
                    }
            }
        } else {
            return a.length - b.length;
        }
    });
    console.log(JSON.stringify(arr));
}

// testContainSameElement();
// testSum();
// testGroupSum();
testSortObjectByProperties();