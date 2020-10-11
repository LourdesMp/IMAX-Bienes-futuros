export default () => {
    const viewError = `
            <h2>404</h2>
            <h1>Página no encontrada </h1>
            <p> El archivo especificado no se encontró en este sitio web. Por favor compruebe el URL para errores y 
            vuelva a intentarlo.</p> 
            <button class="back" > Regresar atras </button>`;
    const divElem = document.createElement('div');
    divElem.setAttribute('id', 'message');
    divElem.innerHTML = viewError;
  
    const back = divElem.querySelector('.back');
    back.addEventListener('click', () => {
      window.history.back();
    });
  
    return divElem;
  };
  