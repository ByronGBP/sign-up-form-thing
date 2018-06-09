import { parseToArray } from './misc';

/* Little class for DOM manipulation purposes */
export class Nvxman {
  constructor (elem, className, id) {
    this.element = elem;
  }

  getTypeAttribute () {
    return this._getAttribute('type');
  }

  getValue () {
    return this.element.value;
  }

  getInputs () {
    return this._getAll('input');
  }

  getSections (query) {
    if (query) {
      return this._get(query);
    }
    return this._getAll('section');
  }

  getButton () {
    return this._get('button');
  }

  addHMTL (html, append) {
    if (append) {
      this.element.innerHTML += html;
    } else {
      this.element.innerHTML = html;
    }
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

  addKeyupEvent (callback) {
    if (callback) {
      this._addEvent('keyup', callback);
    }
  }

  addClickEvent (callback) {
    if (callback) {
      this._addEvent('click', callback);
    }
  }

  removeClickEvent (callback) {
    if (callback) {
      this._removeEvent('click', callback);
    }
  }

  removeFocusEvent (callback) {
    if (callback) {
      this._removeEvent('focus', callback);
    }
  }

  removeBlurEvent (callback) {
    if (callback) {
      this._removeEvent('blur', callback);
    }
  }

  removeKeyupEvent (callback) {
    if (callback) {
      this._removeEvent('keyup', callback);
    }
  }

  remove (parent) {
    if (parent) {
      this.element.parentNode.remove();
    }
    this.element.remove();
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

  hasClass (className) {
    if (className) {
      return this.element.classList.contains(className);
    }
    return false;
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

  _get (query) {
    const element = this.element.querySelector(query);
    return new Nvxman(element);
  }

  _addEvent (event, callback) {
    this.element.addEventListener(event, callback);
  }

  _removeEvent (event, callback) {
    this.element.removeEventListener(event, callback);
  }

  _getAttribute (type) {
    return this.element.attributes[type].value;
  }
}
