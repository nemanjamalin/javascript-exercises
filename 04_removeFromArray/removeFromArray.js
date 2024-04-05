const removeFromArray = function(array,...num) {
    for(let i=0;i<num.length;i++){
    array = array.filter(e=>e!==num[i]);
}

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
