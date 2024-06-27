//No logré resolver esto

let contador = 1;
let numeroAtmicoAnterior = null;
const verificate = function (numeroAtmico) {
  //console.log("Num atomico:" + numeroAtmico + " == " + " contador:" + contador);
  console.log(
    "Num atomico:" +
      numeroAtmico +
      " // " +
      " Contador:" +
      contador +
      " // " +
      " Anterior:" +
      numeroAtmicoAnterior
  );

  if (numeroAtmico === "89-103" || numeroAtmico === "57-71") {
    return true;
  }
  if (numeroAtmico === "89-103") {
    contador = 1;
  }
  if (numeroAtmico == contador || numeroAtmico != "57-71") {
    numeroAtmicoAnterior = numeroAtmico;
    contador = numeroAtmico + 1;
    return true;
  } else if (contador < numeroAtmico) {
    contador = numeroAtmico;
    return false;
  }
};

exports.verificate = verificate;
