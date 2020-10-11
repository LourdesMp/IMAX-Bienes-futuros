export default () => {
    const viewRegistro = `
    <form class="logIn"> 
      <p>por favor<p>
    </form>`;
    const divElem = document.createElement('div');
    divElem.className = 'form-register';
    divElem.innerHTML = viewRegistro;
  
    return divElem;
  };