/* eslint-disable import/no-cycle */
import Login from './login.js';
import Register from './register.js';
import Home from './home.js';
import Profile from './profile.js';
import Diferent from './404.js';

const components = {
  
  login: Login, 
  register: Register,
  home: Home,
  perfil: Profile,
  diferent: Diferent
};

export { components };
