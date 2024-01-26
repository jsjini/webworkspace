// 실제 사용위치와 상관없이 임포트, 리콰이어 는 맨위로 끌어올려서 사용.
const process = require('process');
const os = require('os');

console.log(process.env);
console.log('===================================================');
console.log(os.cpus());
console.log(os.tmpdir());