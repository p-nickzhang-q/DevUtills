const fs = require('fs');
const shops = [];
var shopSql = '';

fs.readFile('店铺信息20190509155732.csv', (err, data) => {
    var rows = data.toString().split('\n');
    rows.forEach((row, index) => {
        var columns = row.split(',');
        shops.push({
            shopCode: columns[0],
            name: columns[1]
        })
    });
    shops.forEach(item => {
        var sql = `update shop set code = '${item.shopCode}' where name = '${item.name}';\n`;
        shopSql += sql;
    })
    console.log(shopSql);
})