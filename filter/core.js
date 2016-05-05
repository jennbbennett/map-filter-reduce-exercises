function onlyEven (array) {
  return array.filter(function(item){
    return (item % 2 === 0);
  })
};

function onlyOneWord (array) {
  return array.filter(function(item){
    return !item.trim().includes(' ')
  })
};

function positiveRowsOnly (array) {
 return array.filter(function(innerArray){
    return innerArray.filter(function(item){
      return item < 0;
    }).length == 0;
  })
};

function allSameVowels (array) {
  return array.filter(function(string){
    var vowels = ['a','e','i','o','u'];
    var stringVowels = string.split('').filter(function(letter){
      return vowels.indexOf(letter) !== -1;
    })
    return stringVowels.filter(function(letter, _, letters){
      return letter === letters[0];
    }).length === stringVowels.length;
  })
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};