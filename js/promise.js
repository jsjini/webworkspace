
let test = new Promise((resolve, reject) => {
    setTimeout(() => console.log("비동기 작업 실행"), 1000);
});

test
    .catch(err => console.log(err))
    .finally(() => console.log('작업 끝!'));

// fetch 의 기본구조.
let fetch = () => {
    return new Promise((resolve, reject) => {

    })
}