//declarar variables para vincular los objetos de formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Generando evento
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if (usuarioVal='' || passwordVal==''){
        return;
    }

    console.log('valor es:' + usuarioVal);
    console.log('valor es:' + passwordVal);


}