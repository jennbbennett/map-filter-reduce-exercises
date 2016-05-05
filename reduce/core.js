function sum (array) {
  return array.reduce(function(previous, current){
    return previous + current;
  });
}

function productAll (array) {
  return array.reduce(function(previous, current){
    for(var i = 0; i < current.length; i ++){
      return 
    }
  });
}

function objectify (array) {
  // your code here
};

function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
