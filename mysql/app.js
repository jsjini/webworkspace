const express = require('express');
const app = express();
const mysql = require('./db.js');
// mysql.executeQuery();

// app.use(function (req, res, next) {}); 미들웨어 만들때 사용. 많이 쓸일은 없음.
// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));


app.listen(3000, () => {
    console.log('Server Start, http://localhost:3000');
});

app.get('/customers', async (req, res) => {
    let list = await mysql.executeQuery('customerList');
    res.json(list);
});

// select 로 나오는 값은 배열이기때문에 단건조회는 [0]을 붙여서 객체로 만들어야함.
app.get('/customers/:id', async (req, res) => {
    let customerId = req.params.id;
    let info = (await mysql.executeQuery('customerInfo', customerId))[0];
    res.json(info);
});

app.post('/customers', async (req, res) => {
    let data = req.body.param;  // 객체
    let result = await mysql.executeQuery('customerInsert', data);
    res.json(result);
});

app.put('/customers/:id', async (req, res) => {
    let result = await updateInfo(req);
    res.json(result);
});

async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.id];  // set절, id컬럼
    let result = await mysql.executeQuery('customerUpdateAll', data);
    return result;
}

async function updateInfo(request) {
    let data = [ ...getInfo(request.body.param), request.params.id]; // 칼럼 : email, phone, address, id
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
}


function getInfo(obj) {
    let getData = ["email", "phone", "address"];
    let newAry = [];
    for (let target of getData) {
        for (let field in obj) {
            if (field == target) {
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry; // [ "hskd@email.com", "010-1111-2222", null ]
}



function selectedInfo(obj) {
    let delData = ["id", "email"];
    let newObj = {};
    let isTargeted = null;
    for (let field in obj) {
        isTargeted = false;
        for (let target of delData) {
            if (field == target) {
                isTargeted = true;
                break;
            }
        }
        if (!isTargeted) {
            newObj[field] = obj[field];
        }
    }
    return newObj;
    // let { id, email, ...others } = obj;
    // return others;
};