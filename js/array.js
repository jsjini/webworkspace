console.log('array.js');

// sort()    : 정렬함수 - 오름차순
// reverse() : 정렬함수 - 내림차순

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

let points = [40, 100, 1, 5, 25, 10];
// 1, 5, 10, 25, 40, 100
points.sort();
console.log(points);

// 문자가 아닌 경우 기준을 정해야함.
points.sort(function (a, b) {
    // 오름차순 - 리턴값이 음수일경우 값변화X , 리턴값이 양수일경우 위치바뀜. 내림차순은 b-a;
    return a - b;
});

// filter : 기존 배열 -> 기준에 따라 걸러 -> 새로운 배열
let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
let result = words.filter((value, idx) => {
    // return 데이터 타입 boolean
    // return value.length > 6;
    return value.indexOf("a") > -1;
});

console.log(result);

// 객체배열(참조타입)의 경우 복사개념이 아니고 두배열이 같은 객체를 가짐.
let userList = [{ id: 100, name: "Hong" }, { id: 200, name: "Kang" }, { id: 300, name: "Han" }];
let newList = userList.filter(obj => {
    return obj.name.indexOf("g") > -1;
});

console.log(userList, newList);

newList.forEach(obj => {
    obj.age = 20;
});

console.log(userList, newList);

// map() : 기존 배열 -> 기준 + 조작에 따라 걸러 -> 새로운 배열 : filter와 다르게 배열의 사이즈를 줄일 수는 없음.
userList = [{ id: 100, name: "Hong" }, { id: 200, name: "Kang" }, { id: 300, name: "Han" }];

let newArray = userList.map(function (obj) {
    // return 데이터 타입 제한없음.
    return obj.id < 300 ? obj.name : null;
});
console.log(userList, newArray);
console.clear();

newList = userList.map((obj) => {
    return {
        id: obj.id,
        name: obj.name
    };
});

console.log(userList, newList);
// 객체배열(참조타입)의 경우 map() return값으로 새로운 객체를 만들어서 하면 복사할 수 있음.
newList.forEach(obj => {
    obj.age = 20;
})

console.log(userList, newList);

// reduce() : 누적합계
let nums = [50, 12, 999, 6, 100];
let sumRes = nums.reduce(function (total, value) {
    return total + value;
}, 0);

console.log(sumRes);

