import { changeView } from './view-controller/router.js'
const init = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyBWmz14E95aGQKH6f_lbElFbrflbcSe5po",
      authDomain: "bienesfuturos-291714.firebaseapp.com",
      // databaseURL: "https://bienesfuturos-291714.firebaseio.com",
      projectId: "bienesfuturos-291714",
      storageBucket: "bienesfuturos-291714.appspot.com",
      messagingSenderId: "857700584245",
      appId: "1:857700584245:web:696cedadbc52d62a96da7c",
      measurementId: "G-371B0KJDSB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
    firebase.analytics();
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));
  };
window.addEventListener('load', init);

