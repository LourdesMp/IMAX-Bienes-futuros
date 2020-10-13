import { changeView } from '../view-controller/router.js';
export default () => {
    const viewRegister = `
    <form class="box-register"> 
        <img class="logo-imax" src="assets/logo-imax.png">
        <div class="formulary">
          <div class="box-user"> <i class="user-icon fas fa-user"> </i><input class="emailRegister user" type="email" placeholder="Correo Electrónico" required>   </div>
          <div class="box-user"> <i class="user-icon fas fa-lock"> </i><input class="passwordRegister user" type="password" placeholder="Contraseña" required>  </div>  
          <div class="box-user"> <i class="user-icon fas fa-lock"> </i><input class="passwordRegisterC user" type="password" placeholder="Confirmar contraseña" required>  </div>       
          <div class="reg_error_inner" id="reg_error_inner"></div>
          <button type="submit" class= "btn-register"> Registrar </button>
        </div>
    </form>`;
    const divElem = document.createElement('div');
    divElem.className = 'form-register';
    divElem.innerHTML = viewRegister;

  const signupForm = divElem.querySelector('.box-register');
  const auth = firebase.auth();
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailRegister = divElem.querySelector('.emailRegister').value;
    const passwordRegister = divElem.querySelector('.passwordRegister').value;
    const passwordRegisterC = divElem.querySelector('.passwordRegisterC').value;
    console.log(emailRegister, passwordRegister, passwordRegisterC);
    if (passwordRegister === passwordRegisterC){
      auth
      .createUserWithEmailAndPassword(emailRegister,passwordRegister)
      .then(userCredential => {
        signupForm.reset();
        console.log('vas bien')
        changeView('#/home')
      })
    } else {
      const error= divElem.querySelector('.reg_error_inner')
      error.innerHTML='las contraseñas no coinciden';
      console.log('las contraseñas no coinciden')
    }
    


  })


    return divElem;
  };