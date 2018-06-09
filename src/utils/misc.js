/**
 * Little library with miscellaneous operations
 */

export function parseToArray (item) {
  return item.length && typeof item === 'object' ? item : [item];
};

export function parseToObject (arr, keys) {
  let object = {};
  if (arr.length !== keys.length) {
    throw new Error('Array and keys must have same length', arr, keys);
  }
  for (let i = 0; i < arr.length; i++) {
    object[keys[i]] = arr[i];
  }

  return object;
}

export function hasUpperCase (str) {
  let regex = /[A-Z]/;
  return regex.test(str);
}

export function hasSymbol (str) {
  let regex = /\W/;
  return regex.test(str);
}

export function hasNumber (str) {
  let regex = /[0-9]/;
  return regex.test(str);
}

export function hasLength (str, length) {
  return str.length >= length;
}
