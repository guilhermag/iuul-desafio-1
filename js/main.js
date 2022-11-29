import { changeOcupation } from './modules/home.js';
import { pageTransition } from './modules/sections.js';
import { clearMessagesStorage } from './modules/contact.js';

// Cuida das transicoes entre as secoes do site
pageTransition();

changeOcupation();

clearMessagesStorage();