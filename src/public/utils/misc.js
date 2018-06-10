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
  if (typeof str === 'string') {
    let regex = /[A-Z]/;
    return regex.test(str);
  } else {
    throw new Error(`type not supported -> str: ${typeof str}`);
  }
}

export function hasSymbol (str) {
  if (typeof str === 'string') {
    let regex = /\W/;
    return regex.test(str);
  } else {
    throw new Error(`type not supported -> str: ${typeof str}`);
  }
}

export function hasNumber (str) {
  if (typeof str === 'string') {
    let regex = /[0-9]/;
    return regex.test(str);
  } else {
    throw new Error(`type not supported -> str: ${typeof str}`);
  }
}

export function hasLength (str, length) {
  if (typeof str === 'string' && typeof length === 'number') {
    return str.length >= length;
  } else {
    throw new Error(`type not supported -> str, length: ${typeof str}, ${typeof length}`);
  }
}
