function ucFirst(str) {
  if (str==='') return '';    
  let FirstLetter= str[0].toUpperCase();
  let WordEnding = str.slice(1);

return FirstLetter+WordEnding;

}
