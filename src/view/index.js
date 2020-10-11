/* eslint-disable import/no-cycle */
import Ingreso from './ingreso.js';
import Registro from './registro.js';
import Diferent from './404.js';

const components = {
  
  ingreso: Ingreso, 
  registro: Registro,
  diferent: Diferent
};

export { components };
