export default () => {
    const viewProfile = `
    <header>
        <img class="logo-imax" src="assets/logo-imax.png">
        <nav class= "menu">
            <ul class="menubar">
            <li>
                <a class="profile" href="#/perfil">Perfil</a>
            </li>
            <li>
                <a class ="fut-assets" href="#/home">Bienes Futuros</a>
                <ul>
                    <li><a href="#/lista">Proyectos</a></li>
                    <li><a href="#/nuevo">Nuevo Proyectos</a></li>     
                </ul>
            </li>
            <li>
            <a class="logOut">Cerrar Sesion <i class="fas fa-sign-out-alt"></i></a>
            </li>
            </ul>
        </nav>
    </header>
    <div class ="box-body">
        <div class="box-profile">
            <p class="title">Perfil del usuario</p>
            <div class="box-user"> <label>Nombre: </label> <input class="nombre" type="text"  required>   </div>
            <div class="box-user"> <label>Área: </label> 
                <select name="area" className="select-modal" required >
                <option value="emp">Evaluación y Monitoreo de Proyectos</option>
                <option value="ie">Informes Especiales</option>
                <option value="iad">Innovacion y analisis de data</option>
                </select>  </div>  
            <div class="box-user"> <label>Email: </label> <input class="user" type="email" required>  </div>     
            <div class="box-user"> <label>Password: </label> <input class="user" type="password"  required>  </div>         
            <div class="box-btn">
            <button class= "btn-guardar"> Guardar</button>
            <button class= "btn-cancelar"> Cancelar </button>
            </div>
        </div>
    <div>
    `;
    const divElem = document.createElement('div');
    divElem.className = 'form-profile';
    divElem.innerHTML = viewProfile;
    return divElem;
  };