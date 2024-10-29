function jugar() {
  let puntaje = 0;
  let numeroAleatorio = Math.floor(Math.random() * 10 + 1);
  let numeroPlayer;
  console.log(numeroAleatorio);
  do {
    numeroPlayer = parseInt(prompt("Escoge un número del 1 al 10"));
    puntaje++;

    if (numeroPlayer === numeroAleatorio) {
      alert(
        "¡Has ganado! El número aleatorio es: " +
          numeroAleatorio +
          "\nIntentos: " +
          puntaje
      );
    } else if (numeroPlayer > numeroAleatorio) {
      alert("El número es muy alto. Intenta de nuevo.");
    } else if (numeroPlayer < numeroAleatorio) {
      alert("El número es muy bajo. Intenta de nuevo.");
    }
  } while (numeroPlayer !== numeroAleatorio);

  let jugarOtraVez = confirm("¿Quieres jugar otra vez?");
  if (jugarOtraVez) {
    jugar();
  }
}

jugar();
