import { parseToArray } from './misc';

export class Nvxman {
  constructor (elem, className, id) {
    this.element = elem;
  }

  getInputs () {
    return this._getAll('input');
  }

  addHMTL (html) {
    this.element.innerHTML = html;
  }

  addFocusEvent (callback) {
    if (callback) {
      this._addEvent('focus', callback);
    }
  }

  addBlurEvent (callback) {
    if (callback) {
      this._addEvent('blur', callback);
    }
  }

  append (childs) {
    childs = parseToArray(childs);

    for (var i = 0; i < childs.length; i++) {
      this.element.appendChild(childs[i]);
    }
  }

  removeAllChilds () {
    while (this.elem.firstChild) {
      this.elem.removeChild(this.elem.firstChild);
    }
  }

  addClass (classNames) {
    if (classNames) {
      classNames = parseToArray(classNames);
      for (var i = 0; i < classNames.length; i++) {
        this.element.classList.add(classNames[i]);
      }
    }
  }

  removeClass (classNames) {
    if (classNames) {
      classNames = parseToArray(classNames);
      for (var i = 0; i < classNames.length; i++) {
        this.element.classList.remove(classNames[i]);
      }
    }
  }

  setText (text) {
    if (!text) {
      text = '';
    }
    this.element.innerText = text;
  }

  _getAll (query) {
    const elements = this.element.querySelectorAll(query);
    let nvxElements = [];
    for (let i = 0; i < elements.length; i++) {
      nvxElements.push(new Nvxman(elements[i]));
    }
    return nvxElements;
  }

  _addEvent (event, callback) {
    this.element.addEventListener(event, callback);
  }

  _removeEvent (event, callback) {
    this.element.removeEventListener(event, callback);
  }
}
