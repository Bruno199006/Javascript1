let edad = Number(prompt("edad para ingresar a la discoteca?"));
let capacidadMaxima = 100; 
let cantidadPersonas = 0; 


function controlDeEdad(){
if(edad >= 18){
    alert("Podes entrar a la discoteca");
    
}else if(edad<18){
    alert("Lo siento eres menor de edad por lo tanto no puedes pasar");
}
}
controlDeEdad();

for (let cantidadPersonas = 0; cantidadPersonas < capacidadMaxima; cantidadPersonas ++) {
    
  let personasIngresan = Math.floor(Math.random() * 10); 

  cantidadPersonas += personasIngresan; 

  console.log("Total de personas en la discoteca: " + cantidadPersonas);

  if (cantidadPersonas >= capacidadMaxima) {
    console.log("La discoteca está llena. No pueden pasar más personas.");
    break;
}
}


