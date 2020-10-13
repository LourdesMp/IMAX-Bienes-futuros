import { changeView } from '../view-controller/router.js';
export default () => {
    const viewTasacion = `
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
        <div class="box-tasacion">
                <div class="head-list">
                    <p class="title-list">Crear Tasación de Bien Futuro</p>
                </div>
                <div class="body-list">
                    <div class="search-list">
                        <div class="box-first">
                            <label class="title-tasacion">Datos del Cliente: </label> 
                            <div class="search-input"> <input class="nombre" type="text" placeholder="Nombres y apellidos"> 
                            <input class="dni" placeholder="DNI"type="text" > </div>
                        </div>
                        <div class="box-first">
                            <label class="title-tasacion">Datos del Conyugue: </label> 
                            <div class="search-input"> <input class="nombre" type="text" placeholder="Nombres y apellidos"> 
                            <input class="dni" placeholder="DNI"type="text" > </div>
                        </div>
                        <div class="box-cambio">
                            <label class="title-tasacion">Tipo de cambio: </label>
                            <div class="search-input">  <input class="tipo-cambio" type="text" > </div>
                        </div>
                    </div> 
                    <div class="box-second">
                        <div class="search-input"> <label>Nombre del Proyecto: </label> <input class="nombre-p" type="text" > </div>
                        <div class="search-input"> <label>Dirección del Proyecto: </label> <input class="direccion-p" type="text" > </div>
                        <div class="search-input"> <label>Banco: </label> <input class="nombre" type="banco-p" > </div>
                        <div class="search-input"> <label>Promotor: </label> <input class="nombre" type="promotor-p" > </div>
                    </div>
                    <div class="datos-inmueble">
                        <label class="title-tasacion">Datos del Inmueble a Tasar: </label> 
                        <div class="box-second">
                            <div class="search-input"> <label>Departamentos: </label> 
                            <select name="area" className="select-modal" required >
                                <option value="">112</option>
                                <option value="">113</option>
                                <option value="">114</option>
                            </select> </div>
                            <div class="search-input"> <label>Estacionamientos: </label> 
                            <select name="area" className="select-modal" required >
                                <option value="">112</option>
                                <option value="">113</option>
                                <option value="">114</option>
                                </select></div>
                            <div class="search-input"> <label>Depósitos: </label> <input class="nombre" type="banco-p" > </div>
                            <div class="search-input"> <label>Valor de Venta: </label> 
                            <input class="nombre-p" type="text" > </div>
                            <div class="search-input"> <label>Moneda: </label> 
                            <select name="area" className="select-modal" required >
                                <option value="soles"> Soles</option>
                                <option value="dolares">Dólares</option>    
                                </select> </div>
                        </div>
                        <div class="box-second">
                            <div class="search-input"> <label>Valor m2 terreno (USD): </label> <input class="nombre-p" type="text" > </div>
                            <div class="search-input"> <label>Valor Comercial: </label> <input class="nombre" type="text" > </div>
                            <div class="search-input"> <label>Porcentaje de Revisión: </label> <input class="nombre" type="number" > </div>
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
                  <div class="box-btn"> 
                  <button class="btn-guardarT">Guardar Tasacion </button>
                  <button class="btn-cancelar">Cancelar</button>
                  </div>
                   
                </div> 
           
        </div>
    <div>
    `;
    const sectionElem = document.createElement('section');
    sectionElem.className = 'form-tasacion';
    sectionElem.innerHTML = viewTasacion;

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