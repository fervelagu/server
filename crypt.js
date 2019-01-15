const bcrypt = require('bcrypt');
const saltRounds = 256;

const plainPassword1 = "HelloWorld";
const plainPassword2 = "bliss";

const salt  = bcrypt.genSaltSync(saltRounds);
const salt2  = bcrypt.genSaltSync(10);

const hash1 = bcrypt.hashSync(plainPassword1, salt);
const hash2 = bcrypt.hashSync(plainPassword2, salt);

const hashTest = bcrypt.hashSync(plainPassword2, salt2);

console.log("Hash 1: ", hash1);
console.log("Hash 2: ", hash2);
console.log("HashTest: ", hashTest);