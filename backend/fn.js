const addNums = (x , y) => {
    return x + y;
}

function subtractNums(x,y){
    return x - y;
}

// Export modules are special objects
// Here we assign an object to the exports property
// With a list of functions we want to be available
module.exports = {
    addNumsGlobal: addNums,
    addNums,
    subtractNums,
}