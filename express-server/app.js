const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js');
const app = express();

// 미들웨어
// -- Request Data Process

// application/json
app.use(express.json({
    limit: '50mb'
}))

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Error 
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).json({
        statusCode: res.statusCode,
        errMessage: err.message
    });
});

app.get('/defaultErr', (req, res) => {
    throw new Error('기본 핸들러 동작');
})

app.get('/custmoErr', (req, res, next) => {
    next(new Error('Process Fail! Check Data!'));
})

// static
app.use(express.static('./files'));
app.use('/public', express.static('./files'));

// Data Loding
const jsonFile = fs.readFileSync('./db.json');
const jsonData = JSON.parse(jsonFile);

const getData = (target, where) => {
    let data = jsonData[target];
    if (Array.isArray(data)) {
        let list = data;
        for (let obj of list) {
            if (obj.id == where) {
                data = obj;
            }
        }
    }
    return data;
}

app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('http://localhost:3000');
})

app.get('/', (req, res) => {
    res.send('Hello, Express.js World');
})

// 전체조회
app.get('/posts', (req, res) => {
    let data = getData('posts');
    res.json(data);
});

// 단건조회
app.get('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let data = getData('posts', postId);
    res.json(data);
});

// 전체조회 - comments
app.get('/comments', (req, res) => {
    let data = getData('comments');
    res.json(data);
})

// 단건조회 - comments
app.get('/comments/:id', (req, res) => {
    let commentId = req.params.id;
    let data = getData('comments', commentId);
    res.json(data);
});

// 조회 - profile
app.get('/profile', (req, res) => {
    let data = getData('profile');
    res.json(data);
})

// 등록
app.post('/posts', (req, res) => {
    let data = req.body;
    console.log('등록', data);
    res.json(data);
})

// 수정
app.put('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let data = req.body;
    console.log('수정', postId, data);
    res.json({ id: postId, data });
})

// 삭제
app.delete('/posts/:id', (req, res) => {
    let postId = req.params.id;
    console.log('삭제', postId);
    res.sendStatus(203);
})


// 검색을 포함하는 경우 -> QueryString
// list[0].id=100&list[0].name=Hong&~~
app.get('/search', (req, res) => {
    let keywards = req.query;
    console.log('검색조건 구성', keywards);
    res.json(keywards);
})