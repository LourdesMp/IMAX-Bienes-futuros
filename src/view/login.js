
// import { logIn, googleAuth } from '../controller/firebase.js';
import { changeView } from '../view-controller/router.js';

export default () => {
  const viewLogin = `
  <form class="logIn"> 
      <img class="logo-imax" src="assets/logo-imax.png">
      <div class="formulary">
        <div class="box-user"> <i class="user-icon fas fa-user"> </i><input class="emailLogin user" type="email" placeholder="Correo Electrónico" required>   </div>
        <div class="box-user"> <i class="user-icon fas fa-lock"> </i><input class="passwordLogin user" type="password" placeholder="Contraseña" required>  </div>       
        <div class="reg_error_inner" id="reg_error_inner"></div>
        <button type="submit" class= "btn-login"> Ingresar </button>
      </div>
      <p class="p-Options">¿No tienes cuenta? <a class="register"  href="#/register">Regístrate</a> </p>
  </form>`;
  const sectionElem = document.createElement('section');
  sectionElem.className = 'login';
  sectionElem.innerHTML = viewLogin;
  
  const signInForm = sectionElem.querySelector('.logIn');
  const auth = firebase.auth();
  signInForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailLogin = sectionElem.querySelector('.emailLogin').value;
    const passwordLogin = sectionElem.querySelector('.passwordLogin').value;
    console.log(emailLogin,passwordLogin)

    auth
      .signInWithEmailAndPassword(emailLogin,passwordLogin)
      .then(userCredential => {
        signInForm.reset();
        console.log('vas bien en esta tambien')
        changeView('#/home')
      }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          sectionElem.querySelector('#reg_error_inner').innerHTML = 'Contraseña incorrecta.';
        } else {
          sectionElem.querySelector('#reg_error_inner').innerHTML = errorMessage;
        }
      })
  })
  


  return sectionElem;
};
