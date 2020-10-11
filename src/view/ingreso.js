
// import { logIn, googleAuth } from '../controller/firebase.js';


export default () => {
  const viewIngreso = `
  <img class="imageDetail" src="assets/vista1.jpg">
  <form class="logIn"> 
      <p> Bienvenid@s  </p>
      <div class="formulario">
        <input class="emailLogin" type="email" placeholder="Correo Electrónico" required> 
        <input class="passwordLogin" type="password" placeholder="Contraseña" required> 
        <button class= "ingresar"> Ingresar </button>
      </div>
      <p class="p-Options">¿No tienes cuenta?,<a class="register"  href="#/register">Regístrate</a> </p>
  </form>`;
  const sectionElem = document.createElement('section');
  sectionElem.className = 'login';
  sectionElem.innerHTML = viewIngreso;

  return sectionElem;
};
