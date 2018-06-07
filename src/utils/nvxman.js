import { parseToArray } from './misc';

export class Nvxman {
  constructor (elem, className, id) {
    this.element = elem;
  }

  addHMTL (html) {
    this.element.innerHTML = html;
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

  removeClass (classNames) {
    if (classNames) {
      classNames = parseToArray(classNames);
      for (var i = 0; i < classNames.length; i++) {
        this.element.classList.remove(classNames[i]);
      }
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

  setText (text) {
    if (!text) {
      text = '';
    }
    this.element.innerText = text;
  }

  _addEventTo (elem, event, callback) {
    elem.addEventListener(event, callback);
  }

  _removeEventTo (elem, event, callback) {
    elem.removeEventListener(event, callback);
  }
}
