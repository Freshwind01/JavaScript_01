let camelize = (str) => {
  let hasLeadingDash = str[0] === '-';
  return str
    .split('-')
    .filter(item => item !== '')
    .map((word, index) => {
      if (index === 0 && !hasLeadingDash) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join('');
};
