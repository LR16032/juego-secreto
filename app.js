
   //lista de numeros del 1 al 10
   let listadeNumeros = [];
//valor de numero aleatorio generado;
let RandomNumber = this.generarNumeroAleatorio();




//intentos para hacertar el numero
let contador = 1;
function  ponerNombreTags(tipoTag,descripcionTag){
    let tagNombre = document.querySelector(tipoTag);
    tagNombre.innerHTML = descripcionTag;
}




//mensajes iniciales
function mensajesIniciales(){
    if(listadeNumeros.length==10){
        return ponerNombreTags('p','todos los numeros fueron sorteados');
    }
    ponerNombreTags('h1','Juego del número secreto');
    ponerNombreTags('p','Elija un número del 1 al 10');
    document.getElementById('intentar').removeAttribute('disabled');
    RandomNumber = generarNumeroAleatorio();
    console.log(RandomNumber);
    contador = 1;


}

mensajesIniciales();

function generarNumeroAleatorio(){
    let aleatorio = Math.floor(Math.random()*10+1);
    
    if(listadeNumeros.includes(aleatorio)&&listadeNumeros.length<10){
        return generarNumeroAleatorio();
    }else if(listadeNumeros.length>=10){
        return 0;
    }else{
        return aleatorio;
    }
}

function evaluarNumero(){
   let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
   console.log(numeroUsuario);
   console.log(RandomNumber);
   if(RandomNumber === 0){
    alert("todos los numeros fueron usados");
    return;
   }
   if(numeroUsuario === RandomNumber){
    ponerNombreTags('p',`Acertaste el número secreto!! en ${contador} ${(contador==1)?'vez':'veces'}`);
    limpiar();
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('intentar').setAttribute('disabled',true);

    listadeNumeros.push(RandomNumber);
    console.log(listadeNumeros);

   }else{
    if(numeroUsuario>RandomNumber){
        ponerNombreTags('p','El número es menor'); 
    }else{
    ponerNombreTags('p','El número es mayor');
    }
    contador++;
   }

   //limpiar elementos
   function limpiar(){
    document.getElementById("numeroUsuario").value="";
   }




}
   //reiniciar valores del juego
function reiniciarJuego(){
    mensajesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
   

   }


