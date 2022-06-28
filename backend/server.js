const express = require('express');
const { addNumsGlobal,addNums,subtractNums } = require('./fn');
const app = express();
const port = process.env.PORT || 4000;

const fn = require('./fn')



console.log(addNumsGlobal(4,3))
console.log(addNums(14,3))
console.log(subtractNums(14,3))


app.listen(port, () => {
    console.log(`Server listening on PORT: ${port}`)
});