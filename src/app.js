'use strict';

import { style } from './styles/style.css'; // eslint-disable-line no-unused-vars
import { FormView } from './views/form';
import { FormController } from './controllers/form';

const init = () => {
  const mainContainer = document.querySelector('#main-container');
  const controller = new FormController();
  const formView = new FormView(mainContainer, controller); // eslint-disable-line no-unused-vars
};

document.addEventListener('DOMContentLoaded', init);
