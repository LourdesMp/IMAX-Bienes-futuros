import { components } from '../view/index.js'

const changeView = (hash) => {
  const id = hash.split('/')[1];
  const sectionMain= document.getElementById ('container');
  sectionMain.innerHTML= '';
  switch (hash) {
    case '': 
    case '#':
    case '#/':
       { return sectionMain.appendChild(components.login()); }
    case '#/register':
    case '#/home':
    case '#/perfil': 
    case '#/lista': 
    case '#/nuevo':  
    case '#/tasacion':  
       { return sectionMain.appendChild(components[id]()); }
    default: 
        return sectionMain.appendChild(components.diferent());
  };
 
};

export {changeView}