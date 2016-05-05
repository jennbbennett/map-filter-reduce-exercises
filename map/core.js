function multiplyBy10(array) {
    return array.map(function (item) {
        return item * 10;
    });
}

function shiftRight(array) {
    return array.map(function (item, index, array) {
        if (index === 0) {
            return array[array.length - 1];
        } else {
            return array[index - 1];
        }
    });
}

function onlyVowels(array) {
    return array.map(function (item, index, array) {
        return item.replace(/[^aeiou]/gi, "");
    });
}

function doubleMatrix(outerArray) {
    return outerArray.map(function (innerArray) {
       return innerArray.map(function(item){
            return item * 2;
        })
    });

}

module.exports = {
    multiplyBy10: multiplyBy10,
    shiftRight: shiftRight,
    onlyVowels: onlyVowels,
    doubleMatrix: doubleMatrix
};
