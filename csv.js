const csvParse = require('csv-parse');
const fs = require('fs');
var objs = [];
// var otherObjs = [];
// var province = [];
// var citys = [];
// var countys = [];
var provinceSql = '';

fs.readFile('区域文档20190509-101230.csv', (err, data) => {
    var rows = data.toString().split('\n');
    rows.forEach((row, index) => {
        var columns = row.split(',');
        objs.push({
            id: index,
            sid: columns[0],
            name: columns[1],
            parent_id: findIdx(rows, columns[2]),
            sparent_id: columns[2],
            type: columns[3],
            code: columns[4]
        });
    });
    objs.forEach(item => {
        var attr = 'id,name,type,parent_id,code';
        var value = `${item.id},'${item.name}',${type(item.type)},${item.parent_id},${item.code || 0}`;
        var sql = `INSERT INTO address (${attr}) VALUES (${value});\n`;
        provinceSql += sql;
    });
    console.log(provinceSql);
})

function type(type) {
    var value;
    switch (type) {
        case 'Province':
            value = 0;
            break;
        case 'County':
            value = 2;
            break;
        case 'City':
            value = 1;
            break;

        default:
            break;
    }
    return value
}

function findIdx(rows, sparent_id) {
    if (sparent_id === "") {
        return 0;
    }
    var index = rows.findIndex(row => {
        var columns = row.split(',');
        return sparent_id === columns[0];
    })
    return index;
}