/* eslint-disable import/no-cycle */
import Login from './login.js';
import Register from './register.js';
import Diferent from './404.js';

const components = {
  
  login: Login, 
  register: Register,
  diferent: Diferent
};

export { components };
