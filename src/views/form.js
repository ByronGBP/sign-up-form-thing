import { Nvxman } from '../utils/nvxman';

export class FormView {
  constructor (dom) {
    this._dom = new Nvxman(dom);
    this._init();
  }

  _init () {
    this._addHTML();
    this._addInputsEvents();
  }

  _addInputsEvents () {
    this.callbackFocusInput = (evt) => {
      evt.target.classList.add('has-content');
    };

    this.callbackBlurInput = (evt) => {
      const target = evt.target;
      if (target.value === '') {
        evt.target.classList.remove('has-content');
      }
    };

    const inputs = this._dom.getInputs();

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addFocusEvent(this.callbackFocusInput);
      inputs[i].addBlurEvent(this.callbackBlurInput);
    }
  }

  _addHTML () {
    const html = this._getTemplateEmailPassword();
    this._dom.addHMTL(html);
  }

  _getTemplateEmailPassword () {
    return `
    <div id="title" class="space">
      <span class="title-text">Sign up</span>
    </div>
    <div id="inputs-field" class="flex space">
      <div class="space flex">
        <input type="email" class="input-field">
        <label class="placeholder">Email</label>
        <span class="border-focus"></span>
      </div>
      <div class="space flex">
        <input type="text" class="input-field">
        <label class="placeholder">Password</label>
        <span class="border-focus"></span>
      </div>
      <div class="space flex">
        <button class="next">Next</button>
      </div>
    </div>
    `;
  }
}
