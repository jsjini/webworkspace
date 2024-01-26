// ES6 이전 (2016년이전)
// 재생산을 위한 객체 => 생성자함수 + 즉시실행함수
// var Person = (function () {

//     // 생성자 함수 - 첫글자가 대문자. (객체생성용도)
//     function Person(name) {
//         // 객체가 가질 필드정의
//         // _ 가 붙은 이유는 숨겨진 필드라는 의미로 개발자들끼리 쓰는 암묵적 기호.
//         this._name = name;
//     }

//     // 객체가 가질 메소드
//     Person.prototype.sayHi = function () {
//         console.log("Hi " + this._name);
//     }

//     // 필드에 접근할 Setter, Getter
//     Person.prototype.setName = function (name) {
//         this._name = name;
//     }

//     Person.prototype.getName = function () {
//         return this._name;
//     }

//     return Person;
// })();

// let userA = new Person("Hong");
// userA.sayHi();
// userA.setName("Adword");
// userA.sayHi();


// ES6
// 클래스 - let, const 방식으로 동작을 함. 중복불가 등등.
class Person {

    // 클래스는 반드시 생성자가 있어야한다.
    constructor(name) {
        this._name = name;
    }

    // 메소드 - 일반적인 함수 만드는 것 처럼 내부에 정의하면 됨.
    sayHi() {
        console.log("Hi, new " + this._name);
    }

    // Setter, Getter
    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let userB = new Person("Hong");
userB.sayHi();
userB.name = "Lee";
console.log(userB.name);
userB.sayHi();