'use strict';

import { style } from './styles/style.css'; // eslint-disable-line no-unused-vars
import { FormView } from './views/form';

const init = () => {
  const mainContainer = document.querySelector('#main-container');
  const formView = new FormView(mainContainer);
};

document.addEventListener('DOMContentLoaded', init);
