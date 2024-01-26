const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');    //  ./ => 같은 경로를 의미. (경로라는걸 알려주기위해 앞에 . 을 붙임) .. => 상위
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput });

const msg = 'Log Writing';

logger.log('Result : %s', msg);   //stdout
logger.error(`Result : ${msg}`); //stderr
