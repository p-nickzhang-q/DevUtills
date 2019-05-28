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

testSum();
testGroupSum();