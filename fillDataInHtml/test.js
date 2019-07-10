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
                name: 'zh2',
                obj: {
                    a: 'a',
                    b: 'b'
                }
            },
            {
                name: 'zh3',
                obj: {
                    a: 'c',
                    b: 'd'
                }
            }
        ],
        obj: {
            'test': 'test'
        },
        arr4: [1, 2],
        arr: []
    }))
});