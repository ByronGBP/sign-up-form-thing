import { Nvxman } from '../utils/nvxman';

export class FormView {
  constructor (dom) {
    this._dom = new Nvxman(dom);
    this._init();
  }

  _init () {
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
      <button class="next">Next</button>
    </div>
    `;
  }
}
