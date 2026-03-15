function camelize(str) {
let arr = str.split('');
let NewArr=[];
for (let i=0; i<arr.length;i++)
 { 
  if (arr[i]==='-') {arr[i+1]=arr[i+1].toUpperCase(); //Если попадается '-', то следующая за ним буква должна быть заглавной
                     delete arr[i]; //удаляю '-', остается пустое место. Если другой метод использовать, то будет пересчитан массив, а этого мне не надо. 
                    }      
 }
NewArr = arr.filter(item => {return item !== '';});  //очистить массив от пустых элементов
return NewArr.join(''); // собрать в строку
}
//элегантнее не получилось что-то у меня...
