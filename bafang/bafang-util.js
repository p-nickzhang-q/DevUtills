var objs = require('./objs').nl_repair_pack_stock_ext;

function generateInsertSql(table, fieldObjs) {

    var fields = {};
    fieldObjs.forEach(obj => {
        fields[obj.tableName] = `#{${transformStr(obj.tableName)},jdbcType=${obj.type}}`;
    })
    var insertFieldsStr = '';
    Object.keys(fields).forEach(field => {
        //最后一个不用加，
        if (Object.keys(fields).indexOf(field) == Object.keys(fields).length - 1) {
            insertFieldsStr += `${field}\n`
        } else {
            insertFieldsStr += `${field},\n`
        }
    })
    var valuesStr = '';
    Object.keys(fields).forEach(field => {
        if (Object.keys(fields).indexOf(field) == Object.keys(fields).length - 1) {
            valuesStr += `${fields[field]}\n`
        } else {
            valuesStr += `${fields[field]},\n`
        }
    })
    var insertSql = `insert into ${table} (${insertFieldsStr}) values \n(${valuesStr});`
    console.log(insertSql);
}

function generateUpdateSql(table, fieldObjs) {
    var fields = {};
    fieldObjs.forEach(obj => {
        fields[obj.tableName] = `#{${transformStr(obj.tableName)},jdbcType=${obj.type}}`;
    })
    var updates = '';
    Object.keys(fields).forEach(field => {
        if (Object.keys(fields).indexOf(field) == Object.keys(fields).length - 1) {
            updates += `<if test="${transformStr(field)}!= null">${field} = ${fields[field]}</if>\n`
        } else {
            updates += `<if test="${transformStr(field)}!= null">${field} = ${fields[field]},</if>\n`
        }
    })
    var updateSql = `update ${table} \n<set>\n${updates}</set> \nwhere id = #{id,jdbcType=BIGINT};`
    console.log(updateSql);
}

function generateResultMap(fieldObjs) {
    var fields = {};
    fieldObjs.forEach(obj => {
        fields[obj.tableName] = `<result column="${obj.tableName}" jdbcType="${obj.type}" property="${transformStr(obj.tableName)}" />\n`;
    })
    var results = '<id column="id" jdbcType="BIGINT" property="id"/>\n';
    Object.keys(fields).forEach(field => {
        results += fields[field];
    })
    console.log(results);
}

function transformStr(str) {
    var newStr = '';
    var arr = str.split('_'); //split是分隔字符串
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

function generateEntity(fieldObjs) {
    var properties = '';
    var jsonPropertyJsonProperties = ''
    fieldObjs.forEach(field => {
        var clazz;
        switch (field.type) {
            case 'BIGINT':
                clazz = 'Long'
                break;
            case 'VARCHAR':
                clazz = 'String'
                break;
            case 'INTEGER':
                clazz = 'Integer'
                break;
            case 'DECIMAL':
                clazz = 'BigDecimal'
                break;
            case 'BOOLEAN':
                clazz = 'boolean'
                break;
            default:
                break;
        }
        var property = `private ${clazz} ${transformStr(field.tableName)};\n`;
        properties += property;
        jsonPropertyJsonProperties += `@JsonProperty("${field.tableName}")\n`;
    })
    console.log(properties);
    console.log('-------------------');
    console.log(jsonPropertyJsonProperties);
}

generateInsertSql('nl_repair_pack_stock_ext', objs);
console.log('-------------------');
generateUpdateSql('nl_repair_pack_stock_ext', objs);
console.log('-------------------');
generateResultMap(objs);
console.log('-------------------');
generateEntity(objs);