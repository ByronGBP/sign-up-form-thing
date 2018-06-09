import { Nvxman } from '../utils/nvxman';
import { Template } from '../templates/template';
import { parseToObject } from '../utils/misc';
import { animateInput } from '../utils/animations';

export class FormView {
  constructor (dom, controller) {
    this._dom = new Nvxman(dom);
    this._controller = controller;
    this._init();
  }

  _init () {
    this._addHTML();
    this._getElements();
    this._createCallbacks();
    this._addInputsEvents();
    this._addButtonEvent();
  }

  _addHTML () {
    this._dom.addHMTL(Template.form);
  }

  _getElements () {
    this.button = this._getButton();
    this.inputs = this._getInputs();
    this.section = this._getSection();
  }

  _getButton () {
    return this._dom.getButton();
  }

  _getSection () {
    return this._dom.getSections('.personal-data');
  }

  _getInputs () {
    let inputs = this._dom.getInputs();
    let keys = [];

    for (let i = 0; i < inputs.length; i++) {
      keys.push(inputs[i].getTypeAttribute());
    }

    return parseToObject(inputs, keys);
  }

  _createCallbacks () {
    this.callbackFocusInput = (evt) => {
      evt.target.classList.add('has-content');
    };

    this.callbackBlurInput = (evt) => {
      const target = evt.target;
      if (target.value === '') {
        target.classList.remove('has-content');
      }
    };

    this.callbackClickButton = (evt) => {
      if (this._isFormValid(true)) {
        this._showPersonalData();
      }
    };

    this.callbackKeyupInput = (evt) => {
      const type = evt.target.attributes.type.value;
      const text = evt.target.value;
      this._controller.check(type, text);
    };

    this._controller.onCheck = (isValid, type) => {
      if (isValid) {
        this.inputs[type].addClass('valid');
        this.inputs[type].removeClass('no-valid');
      } else {
        this.inputs[type].removeClass('valid');
        this.inputs[type].addClass('no-valid');
      }
    };
  }

  _addInputsEvents () {
    for (let key in this.inputs) {
      this.inputs[key].addFocusEvent(this.callbackFocusInput);
      this.inputs[key].addBlurEvent(this.callbackBlurInput);
      this.inputs[key].addKeyupEvent(this.callbackKeyupInput);
    }
  }

  _addButtonEvent () {
    this.button.addClickEvent(this.callbackClickButton);
  }

  _addButtonSignUpEvent () {
    this.button = this._getButton();
    this.callbackClickButton = () => {
      if (this._isFormValid()) {
        this._showSignInSuccess();
      }
    };

    this._addButtonEvent();
  }

  _isFormValid (firstStep) {
    let noValids = [];

    /* Refactor this! */
    if (firstStep) {
      let valid = true;
      if (this.inputs['email'].getValue() === '') {
        this.inputs['email'].addClass('no-valid');
        animateInput(this.inputs['email'].element);
        valid = false;
      }
      if (this.inputs['password'].getValue() === '') {
        animateInput(this.inputs['password'].element);
        this.inputs['password'].addClass('no-valid');
        valid = false;
      }
      if (!valid) {
        return valid;
      }
    }

    for (let key in this.inputs) {
      if (this.inputs[key].getValue() === '' && !firstStep) {
        this.inputs[key].addClass('no-valid');
      }
      if (this.inputs[key].hasClass('no-valid')) {
        noValids.push(this.inputs[key].element);
      }
    }
    if (noValids.length !== 0) {
      for (let i = 0; i < noValids.length; i++) {
        animateInput(noValids[i]);
      }
      return false;
    }
    return true;
  }

  _showPersonalData () {
    this._removeButtonEvent();
    this.button.remove(true);
    this.section.addClass('display');
    this._addButtonSignUpEvent();
  }

  _showSignInSuccess () {
    this._removeButtonEvent();
    this._removeInputsEvents();
    let sections = this._dom.getSections();

    for (let i = 0; i < sections.length; i++) {
      sections[i].addClass('hidden');
      sections[i].removeClass('display');
    }

    let title = this._dom.getElement('.title-text');
    title.setText('Congrats!\n You are sign in!');
    this.button = this._dom.createButton();
    this.callbackClickButton = () => {
      this._init();
    };
    this._addButtonEvent();

    setTimeout(() => {
      let div = document.querySelector('div.hidden');
      div.classList.remove('hidden');
    }, 500);
  }

  _removeButtonEvent () {
    this.button.removeClickEvent(this.callbackClickButton);
  }

  _removeInputsEvents () {
    for (let key in this.inputs) {
      this.inputs[key].removeFocusEvent(this.callbackFocusInput);
      this.inputs[key].removeBlurEvent(this.callbackBlurInput);
      this.inputs[key].removeKeyupEvent(this.callbackKeyupInput);
    }
  }
}
