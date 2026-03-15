function namify(users) {
  let list=[];
  for (user of users)     {
     list.push(user.name);
  }
  return list;
}
