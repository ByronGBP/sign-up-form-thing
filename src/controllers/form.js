import { hasUpperCase, hasNumber, hasSymbol, hasLength } from '../public/utils/misc';

const TYPE = {
  email: 'email',
  password: 'password',
  name: 'name',
  address: 'address',
  postalCode: 'postal-code'
};

export class FormController {
  constructor () {
    this.onCheck = null;
  }

  check (type, text) {
    let isValid = null;
    switch (type) {
    case TYPE.email:
      isValid = this._checkEmail(text);
      break;
    case TYPE.password:
      isValid = this._checkPassword(text);
      break;
    case TYPE.name:
      isValid = this._checkName(text);
      break;
    case TYPE.address:
      isValid = this._checkAddress(text);
      break;
    case TYPE.postalCode:
      isValid = this._checkPostalCode(text);
      break;
    default:
      throw new Error(`type not supported: ${type}`);
    }

    if (this.onCheck) {
      this.onCheck(isValid, type);
    }
  }

  _checkEmail (text) {
    return this._validateEmail(text);
  }

  _checkPassword (text) {
    return this._validatePassword(text);
  }

  _checkName (text) {
    return this._validateName(text);
  }

  _checkAddress (text) {
    return this._validateDefault(text);
  }

  _checkPostalCode (text) {
    return this._validateDefault(text);
  }

  _validatePassword (str) {
    return hasNumber(str) && hasSymbol(str) && hasUpperCase(str) && hasLength(str, 8);
  }

  _validateName (str) {
    return hasLength(str, 1);
  }

  _validateDefault (str) {
    return hasLength(str, 4);
  }

  /* --- stackoverflow --- */

  _validateEmail (str) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(str).toLowerCase());
  }
}
