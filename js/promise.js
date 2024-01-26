
let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("비동기 작업 실행");
        reject("작업 성공");
    }, 1000);
});
// resolve -> then  ,  reject -> catch
test
.then(data => console.log('then', data))
.catch(err => console.log('catch', err))
.finally(() => console.log('작업 끝!'));

// fetch 의 기본구조.
let fetch = () => {
    return new Promise((resolve, reject) => {

    })
}