// customerSql.js

let customerList =
`select id
        , name
        , email
        , phone
        , address
from customers`;

let customerInfo = 
`select id
        , name
        , email
        , phone
        , address
from customers
where id = ?`;
// 1) 배열인지 아닌지 : 물음표의 갯수로 구분 = 1개면 배열X, 2개이상이면 배열사용 
//                     배열의 순서는 위에서 아래, 왼쪽에서 오른쪽 값이 채워짐
// 2) ? 별로 타입이 객체타입인지 단일값인지 : ? 가 누구한테 들어가는지(?앞에 컬럼명)가 쿼리문에 있는지 없는지로 확인가능.
//                                         있으면 단일값, 없으면 객체타입

let customerInsert = 
`insert into customers
set ?`; // 객체, 필드명 == 칼럼명

let customerUpdateAll = 
`update customers
set ?
where id = ?`; // 배열[ 객체, 단일값 ] 위에서 아래, 왼쪽에서 오른쪽

let customerUpdateInfo = 
`update customers
set email = ?, phone = ?, address = ?
where id = ?`; // 배열[ 단일값, 단일값, 단일값, 단일값 ] 위에서 아래, 왼쪽에서 오른쪽


module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo
}