const test = "/Users/mac/"
const fs = require('fs');

fs.readdirSync(test).forEach(file=>{
    console.log(file);
})