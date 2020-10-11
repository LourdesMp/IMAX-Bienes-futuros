
// import { logIn, googleAuth } from '../controller/firebase.js';


export default () => {
  const viewLogin = `
  <form class="logIn"> 
      <img class="logo-imax" src="assets/logo-imax.png">
      <div class="formulary">
        <div class="box-user"> <i class="user-icon fas fa-user"> </i><input class="user" type="email" placeholder="Correo Electrónico" required>   </div>
        <div class="box-user"> <i class="user-icon fas fa-lock"> </i><input class="user" type="password" placeholder="Contraseña" required>  </div>       
        <button class= "btn-login"> Ingresar </button>
      </div>
      <p class="p-Options">¿No tienes cuenta? <a class="register"  href="#/register">Regístrate</a> </p>
  </form>`;
  const sectionElem = document.createElement('section');
  sectionElem.className = 'login';
  sectionElem.innerHTML = viewLogin;

  return sectionElem;
};
