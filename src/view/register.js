export default () => {
    const viewRegister = `
    <form class="box-register"> 
        <img class="logo-imax" src="assets/logo-imax.png">
        <div class="formulary">
          <div class="box-user"> <i class="user-icon fas fa-user"> </i><input class="user" type="email" placeholder="Correo Electrónico" required>   </div>
          <div class="box-user"> <i class="user-icon fas fa-lock"> </i><input class="user" type="password" placeholder="Contraseña" required>  </div>  
          <div class="box-user"> <i class="user-icon fas fa-lock"> </i><input class="user" type="password" placeholder="Confirmar contraseña" required>  </div>       
          <button class= "btn-register"> Registrar </button>
        </div>
    </form>`;
    const divElem = document.createElement('div');
    divElem.className = 'form-register';
    divElem.innerHTML = viewRegister;
    return divElem;
  };