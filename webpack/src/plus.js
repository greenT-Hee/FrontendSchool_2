// 전역을 더럽히지 않기 위해 감싸줌
// const obj = {}; 
// (() => {
//     function plus(a, b) {
//         return a + b;
//     }

//     obj.plus = plus;
// })()


export function plus(a, b) {
    return a + b;
}