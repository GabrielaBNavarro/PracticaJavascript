let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
let jugador = null;


function playGame() {
  console.log("Juego en acción");
  seleccionBot();
  seleccionJugador();
  
}

function seleccionBot() {
  //definir la opcion elegida por el bot
  return (bot = Math.round(Math.random() * 2));
}

function seleccionJugador() {
  //definir la opcion elegida por el jugador
  jugador = parseInt(
    prompt("Ingrese su opcion: 0= PIEDRA | 1 = PAPEL | 2 = TIJERA")
  );

  if (!isNaN(jugador)) {
    if (jugador >= 0 && jugador <= 2) {
      switch (true) {
        case jugador === bot:
          mensajeAlert("EMPATE");
          break;
        case jugador === 0 && bot === 2:
          mensajeAlert("GANASTE");
          break;
        case jugador === 1 && bot === 0:
          mensajeAlert("GANASTE");
          break;
        case jugador === 2 && bot === 1:
          mensajeAlert("GANASTE");
          break;
        default:
          mensajeAlert("PERDISTE");
          break;
      }
    } else {
      mensajeAlert("noOpcion");
    }
  } else {
    mensajeAlert("noNumero");
  }
}

function mensajeAlert(resultado) {
  if (resultado === "noOpcion") {
    swal("ERROR!", "No existe la opción elegida", "error");
  }
  if (resultado === "noNumero") {
    swal("ERROR!", "Debe ingresar un número entre 0 y 2", "error");
  }
  if (resultado === "GANASTE") {
    swal(
      "GANASTE!",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      "success"
    );
  }
  if (resultado === "PERDISTE") {
    swal(
      "PERDISTE!",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      "error"
    );
  }
  if (resultado === "EMPATE") {
    swal(
      "EMPATE!",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`,
      "info"
    );
  }
}
