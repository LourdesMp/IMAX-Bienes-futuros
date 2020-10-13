import { changeView } from '../view-controller/router.js';
export default () => {
    const viewHome = `
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
    <div class = "box-body">
        <div class= "presentation"> 
            <p class="title">Evaluación y Monitoreo de Proyectos</p>
            <p class="paragraph">Evaluamos y Monitoreamos proyectos para asesorar promotores inmobiliarios, inversionistas, empresas e instituciones financieras brindando herramientas de analisis y seguimiento que permitan invertir  o financiar de forma segura; nuestro equipo es especialista 
            en analizar la viabilidad del proyecto y en el control de los flujos, 
            de tiempo, seguridad, calidad y costo del proyecto y obra
            SERVICIOS 
            Monitoreo de Proyectos (Supervisiones Financieras).
            Estudios Técnico-Comerciales (Pre factibilidades, Viabilidades, Estudios de Situación, etc</p>
        </div>
    <div>`;
    const sectionElem = document.createElement('section');
    sectionElem.className = 'home';
    sectionElem.innerHTML = viewHome;
    
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