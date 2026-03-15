function filterRange(arr, a, b) {
  let newArr=[];
  for (let el of arr)  {
    if ((el>=a)&&(el<=b)) {newArr.push(el);}
  }
  return newArr;  
}
