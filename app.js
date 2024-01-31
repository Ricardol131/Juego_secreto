let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto)

function asignarTextoElemento (elemento,texto) {
 let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
   
   console.log (numeroSecreto);

   if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento ('p',`Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
   document.getElementById ('reiniciar').removeAttribute('disabled');
  } else {
    // El usuario no acerto
     if (numeroDeUsuario > numeroSecreto){
      asignarTextoElemento ('p','El numero secreto es menor');
     } else{
      asignarTextoElemento ('p','El numero secreto es mayor');
     }
     intentos ++;
     limpiarCaja ();
   }
    
   return;
}

function limpiarCaja(){
 document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
 
 console.log (numeroGenerado);
 console.log (listaNumerosSorteados);
 //si ya sorteamos todos los numero
  if (listaNumerosSorteados.length == numeroMaximo){
   asignarTextoElemento ('p','Ya te sortearon todos los numeros posibles')
   } else{
     // si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
     return generarNumeroSecreto ();
    } else {
     listaNumerosSorteados.push (numeroGenerado);
     return numeroGenerado;
     } 
   }
}
function condicionesIniciales() {
   asignarTextoElemento ('h1' , 'Juego del numero secreto ');
   asignarTextoElemento ('p',`INDICA UN NUMERO DEL 1 AL ${numeroMaximo}`); 
   numeroSecreto = generarNumeroSecreto ();
   intentos = 1;
}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja ();
  //indicar mensaje de intervalo de numero
  //Generar el numero aleatorio
  //Inicializar el numero de intentos
  condicionesIniciales ();
  //Deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales ();

