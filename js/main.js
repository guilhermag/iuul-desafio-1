import { changeOcupation } from './modules/home.js';
import { pageTransition } from './modules/sections.js';
import { formFunction } from './modules/form.js';
import { checkClearMessages } from './modules/form.js';

// Cuida das transicoes entre as secoes do site
pageTransition();

changeOcupation();

formFunction();

checkClearMessages();
