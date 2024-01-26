const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}
function minus(num1, num2) {
    return num1 - num2;
}
function multi(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}


// module.exports 는 반드시 마지막에 와야함. 노드기반.
module.exports = {
// export default {  html기반.
    defNum: defaultNum,
    add,   // 변수랑 동일한 명으로 만들겠다라는 의미 == "add" : add
    minus,
    multi,
    divide
}
