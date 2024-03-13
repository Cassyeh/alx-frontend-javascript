export default function cleanSet(set, startString) {
  const newList = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      newList.push(item.slice(startString.length));
    }
  }

  return newList.join('-');
}
