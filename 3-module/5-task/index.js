function getMinMax(str) {
  let str1 = str.split(' ');
  let filtered = str1.filter(item => !isNaN(item) && item !== '');
  let numbers = filtered.map(Number);
  
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}
