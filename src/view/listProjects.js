import { changeView } from '../view-controller/router.js';
export default () => {
    const viewListProjects = `
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
    <div class ="box-bodyList">
        <div class="box-listProjects">
                <div class="head-list">
                    <p class="title-list">Lista de Proyectos</p>
                    <div class="leyenda">
                        <p>Leyenda</p>
                        <div class="icon-leyenda">
                        <p><i class="user-upload fas fa-upload"></i></i>Subir Documento</p>
                        <p><i class="user-down fas fa-download"></i>Descargar Documento</p>
                        </div> 
                    </div>
                </div>
                <div class="body-list">
                    <div class="search-list">
                        <p>Buscar por Proyecto</p>
                        <div class="box-search">
                        <div class="search-input"> <label>Por Nombre: </label> <input class="nombre" type="text" > </div>
                        <button class="btn-search">Buscar </button>
                        </div>
                    </div> 
                    <table class="table-list">
                    <tr>
                      <th>Nombre del Proyecto</th>
                      <th>Dirección</th>
                      <th>Promotor</th>
                      <th>Banco</th>
                      <th>Matriz de Tasaciones</th>
                      <th>Formato</th>
                    </tr>
                    <tr>
                      <td>Nueva Primavera</td>
                      <td>Av Larco 320 Barranco - Lima</td>
                      <td>xxxxxxxxxxxx</td>
                      <td>Banco BCP</td>
                      <td><i class="user-upload fas fa-upload"></i><i class="user-down fas fa-download"></i></td>
                      <td><i class="user-upload fas fa-upload"></i><i class="user-down fas fa-download"></i><i class="user-remove far fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                      <td>Nueva Primavera</td>
                      <td>Av Larco 320 Barranco - Lima</td>
                      <td>xxxxxxxxxxxx</td>
                      <td>Banco BCP</td>
                      <td><i class="user-upload fas fa-upload"></i><i class="user-down fas fa-download"></i></td>
                      <td><i class="user-upload fas fa-upload"></i><i class="user-down fas fa-download"></i><i class="user-remove far fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                      <td>Nueva Primavera</td>
                      <td>Av Larco 320 Barranco - Lima</td>
                      <td>xxxxxxxxxxxx</td>
                      <td>Banco BCP</td>
                      <td><i class="user-upload fas fa-upload"></i><i class="user-down fas fa-download"></i></td>
                      <td><i class="user-upload fas fa-upload"></i><i class="user-down fas fa-download"></i><i class="user-remove far fa-trash-alt"></i></td>
                    </tr>
                  </table>
                    <a class="btn-newTasacion" href="#/tasacion">Nueva Tasación</a>
                </div> 
           
        </div>
    <div>
    `;
    const sectionElem = document.createElement('section');
    sectionElem.className = 'form-listProjects';
    sectionElem.innerHTML = viewListProjects;

    const auth = firebase.auth();
    const logOut = sectionElem.querySelector('.logOut');
    logOut.addEventListener('click', e => {
        e.preventDefault();
        auth.signOut().then(() => {
            changeView('#/');
            console.log('saliste')
        })
    })
    return sectionElem;
  };