import { Nvxman } from '../utils/nvxman';
import { Template } from '../templates/template';

export class FormView {
  constructor (dom) {
    this._dom = new Nvxman(dom);
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
    this.inputs = this._dom.getInputs();
    this.button = this._dom.getButton();
    this.section = this._dom.getSections('.personal-data');
  }

  _createCallbacks () {
    this.callbackFocusInput = (evt) => {
      evt.target.classList.add('has-content');
    };

    this.callbackBlurInput = (evt) => {
      const target = evt.target;
      if (target.value === '') {
        evt.target.classList.remove('has-content');
      }
    };

    this.callbackClickButton = (evt) => {
      this._removeButtonEvent();
      this.button.remove(true);
      this.section.addClass('display');
      this._addButtonSignUpEvent();
    };
  }

  _addInputsEvents () {
    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].addFocusEvent(this.callbackFocusInput);
      this.inputs[i].addBlurEvent(this.callbackBlurInput);
    }
  }

  _addButtonEvent () {
    this.button.addClickEvent(this.callbackClickButton);
  }

  _addButtonSignUpEvent () {
    this.button = this._dom.getButton();
    this.callbackClickButton = () => {
      console.log('works!');
    };

    this._addButtonEvent();
  }

  _removeButtonEvent () {
    this.button.removeClickEvent(this.callbackClickButton);
  }

  _removeInputsEvents () {
    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].removeFocusEvent(this.callbackFocusInput);
      this.inputs[i].removeBlurEvent(this.callbackBlurInput);
    }
  }
}
