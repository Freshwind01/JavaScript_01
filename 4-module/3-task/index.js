function highlight(table) {
  const rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    const status = rows[i].cells[3].getAttribute('data-available');
    const gender = rows[i].cells[2].textContent;
    const age = rows[i].cells[1].textContent;
   
    if (status === 'true') {
      rows[i].classList.add('available');
    } else if (status === 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].setAttribute('hidden', '');
    }
  
    if (gender === 'm') {
      rows[i].classList.add('male');
    } else if (gender === 'f') {
      rows[i].classList.add('female');
    }
    if (Number(age) < 18) {
      rows[i].style.textDecoration = 'line-through';
    }
  }
}
