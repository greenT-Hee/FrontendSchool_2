const path = require('path');
// 운영체제 별로 상이한 경로를 한 번에 사용할 수 있게 해주는 작업

module.exports = {
    mode : 'development',
    entry : {
        main : path.resolve('./src/app.js')
    },
    output : {
        filename: '[name].js', //name에 entry의 키값 main이 들어감
        path : path.resolve('./dist')
    }
}