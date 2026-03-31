export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('div');
    this.elem.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>
              <td>${row.name}</td>
              <td>${row.age}</td>
              <td>${row.salary}</td>
              <td>${row.city}</td>
              <td><button>X</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    // Делегирование событий для кнопок удаления
    this.elem.querySelector('tbody').addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        event.target.closest('tr').remove();
      }
    });
  }
}
