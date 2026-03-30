export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

   /* let row1 = document.createElement('tr');
    let heading1 = document.createElement('th');   //Это то, до чего я додумалась.
    heading1.textContent = 'Имя';
    let heading2 = document.createElement('th');
    heading2.textContent = 'Возраст';
    let heading3 = document.createElement('th');
    heading3.textContent = 'Зарплата';
    let heading4 = document.createElement('th');
    heading4.textContent = 'Город';
    let heading5 = document.createElement('th');

    row1.appendChild(heading1);
    row1.appendChild(heading2);
    row1.appendChild(heading3);
    row1.appendChild(heading4);
    row1.appendChild(heading5); */

    // А это ИИ подсказал. И вроде в целом понятно, но написать сама без подсказок не могу.
    
    const headers = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];
    const row1 = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;  
      row1.appendChild(th);
    });      
    
    this.thead.appendChild(row1);
    this.elem.appendChild(this.thead);
    this.elem.appendChild(this.tbody);
 
    this.addData(rows);
  }
  
  addData(rows) {
    rows.forEach(row => {
      const tr = document.createElement('tr');
      
      // Создаем ячейки с данными
      tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
      <td>${row.city}</td>
      <td><button>X</button></td>
    `;
    
    // Кнопка удаления
    tr.querySelector('button').addEventListener('click', () => {
      tr.remove();
});
    
      this.tbody.appendChild(tr);
  });
}

}
