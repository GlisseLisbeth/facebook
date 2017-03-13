var texto = '{"user" : ['+
            '{ "usuario": "glisselisbeth@gmail.com", "password": "123456"},'+
            '{ "usuario": "lucy@gmail.com", "password": "1234"},'+
            '{"usuario": "rafael@gmail.com", "password": "143423"}'+
        ']'+
'};'

//var obj = JSON.parse(texto);

function mensaje(elementReferencia, texto){
  //creamos un nuevo elemento de etiqueta span
  var span = document.createElement("span");
  //se obtiene el elemento en donde se quiere insertar; el elementReferencia es el  id del input.
  var referencia = document.getElementById(elementReferencia);
  //se obtiene la referencia del elemento padre
  var formPadre = referencia.parentNode
  //insertamos el span en el DOM antes del input
  // el texto a insertar en el span
  var texto = document.createTextNode(texto);
  //Insertar  el nuevo elemento
  formPadre.insertBefore(span,referencia.nextSibling);
  //Obtener la referencia del elemento form, como elemento padre
  span.appendChild(texto);
  return span;
}

window.addEventListener('load',function(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener("click",function(evento){
      evento.preventDefault();
      //Realiza las validaciones
      if (email == null || email.lengh = 0){
        mensaje("email", "El campo email no puede estar vacío");
      }
      if (password == null || password.length == 0){
        mensaje("password", "El campo contraseña no puede estar vacío");
      }
      if (email.search(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)){
        mensaje("password", "El campo contraseña no puede estar vacío");
    });

});
