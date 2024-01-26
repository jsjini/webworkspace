// function today() {
//     let date = new Date();
//     let year = date.getFullYear();
//     let month = "0" + (1 + date.getMonth());
//     let day = date.getDate();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let seconds = date.getSeconds();
//     return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
// }
// console.log(today());

function format(value) {
    return ("0" + value).slice(-2); // 2자리
}

function getDateTime() {
    let today = new Date();
    let year = today.getFullYear();
    let month = format(today.getMonth() + 1);
    let day = format(today.getDate());

    let hour = format(today.getHours());
    let min = format(today.getMinutes());
    let sec = format(today.getSeconds());

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}
console.log(getDateTime());

const timeout = setTimeout(() => {
    console.log(getDateTime());
}, 3000);

//clearTimeout(timeout);  // 타임아웃 취소. 잘 안씀

let count = 0;
const interval = setInterval(() => {  // 되도록이면 반복문 안에는 넣지마라.
    console.log("count", count++);
    if (count == 5) {
        clearInterval(interval);
    }
    console.log(getDateTime());
}, 2000);

setImmediate(() => {
    console.log('setImmediate', getDateTime());
});

console.log("마지막 코드");