var fillHtml = require('./utill').fillHtml
const fs = require('fs');

fs.readFile('./fillDataInHtml/test.html', (err, html) => {
    if (err) {
        console.error(err);
    }
    console.log(fillHtml(html.toString(), {
        username: 'zh',
        date: 1561018636477,
        arr2: ['a', 'b'],
        arr3: [{
                name: 'zh'
            },
            {
                name: 'zh2'
            }
        ],
        arr4: [1, 2]
    }))
});