/* eslint-disable import/no-cycle */
import Login from './login.js';
import Register from './register.js';
import Home from './home.js';
import Profile from './profile.js';
import ListProjects from './listProjects.js';
import NewProject from './newProject.js';
import Tasacion from './tasacion.js';
import Diferent from './404.js';

const components = {
  
  login: Login, 
  register: Register,
  home: Home,
  perfil: Profile,
  lista: ListProjects,
  nuevo: NewProject,
  tasacion: Tasacion,
  diferent: Diferent
};

export { components };
