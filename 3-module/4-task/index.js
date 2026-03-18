function showSalary(users, age) {
  let result = users.filter(item => item.age <= age)
 
    .map(item => (item.name + ',' +' '+ item.balance));

  return result.join("\n");
}
