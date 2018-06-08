export function parseToArray (item) {
  return item.length && typeof item === 'object' ? item : [item];
};
