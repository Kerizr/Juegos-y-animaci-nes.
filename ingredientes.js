
  var ingredientes = [];
  var cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
  var contador = 1;

  while(contador <= cantidad && ingredientes.length < cantidad) {
    var ingrediente = prompt("Informe el ingrediente " + contador);
    var existe = false;
    for(var posicion = 0; posicion < ingredientes.length; posicion++) {
      if(ingredientes[posicion] == ingrediente){
        existe = true;
        alert("repetido " + ingrediente);
        break;
      }
    }
    if(existe == false) {
      ingredientes.push(ingrediente);
      contador++;
    }
  }
  console.log(ingredientes);