// 순서: 모듈 쫙~ 미들웨어 쫙~ 라우팅 쫙~

const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// application/x-www-form-urlencoded
const defaultParser = express.urlencoded({ extended: false });

// application/json
const jsonParser = express.json();

// app.use(defaultParser);
app.use(jsonParser);

app.get('/search', defaultParser, (req, res) => {
    let data = req.query.keyword;
    res.send(data + ', 검색결과');
});
// /search?keyword=${value}

app.post('/info', defaultParser, (req, res) => {
    let data = req.body.name;
    res.send('welcome, ' + data);
});
// /info => method:post, body:name=${value}

app.post('/message', (req, res) => {
    let data = req.body.param;
    res.send(data.title + ', ' + data.content);
});
// /message => method:post, body:
// "param" : {"title" : ~~, "content" : ~~}

app.listen(5000, () => {
    console.log('Server Start');
})

let sessionSetting = session({
    secret: 'Have$A!@Nice_day', // 실제 보안관련은 이런 하드코딩 하면안됨.
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 60000  // 밀리세컨드
    }
});

app.use(sessionSetting);

app.post('/login', (req, res) => {
    const { id, pwd } = req.body;
    if (!req.session.isLogin) {
        req.session.user = id;
        req.session.isLogin = true;
    }
    req.session.save((err) => {
        if (err) throw err;
        res.redirect('/');
    })
});

app.get('/logOut', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

// cors
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// 라우팅은 미들웨어 다음으로 적용되어야함.
app.get('/', (req, res) => {
    res.json(req.session);
}); 