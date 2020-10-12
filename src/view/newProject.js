export default () => {
    const viewNewProject = `
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
        <div class="box-newProject">
            <p class="title">Datos del Proyecto</p>
            <div class="box-user"> <label>Nombre: </label> <input class="nombre" type="text"  required>   </div>
            <div class="box-user"> <label>Promotor: </label> <input class="user" type="text" required>  </div>  
            <div class="box-user"> <label>Banco: </label> 
                <select name="area" className="select-modal" required >
                <option value="bcp">Banco de Credito del Perú</option>
                <option value="bbva">BBVA-Banco Continental</option>
                <option value="bp">Banco Pichincha</option>
                </select>  </div>     
            <div class="box-btn">
            <button class= "btn-guardar"> Guardar</button>
            <button class= "btn-cancelar"> Cancelar </button>
            </div>
        </div>
    <div>
    `;
    const sectionElem = document.createElement('section');
    sectionElem.className = 'form-newProject';
    sectionElem.innerHTML = viewNewProject;
    return sectionElem;
  };