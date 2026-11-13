const missatge = document.getElementById("missatge");
const boto = document.getElementById("boto");

const patro = /^\d+,\d+\*\d+$/;

function calcular() {
  try {
    const entrada = prompt("Escriu una operació, per exemple 3.5 * 2");

    if (entrada === null) {
      throw new Error("Has cancel·lat l'operació");
    }

    const parts = entrada.match(patro);

    if (parts === null) {
      throw new SyntaxError("L'expressió no és vàlida. Usa: nombre operador nombre");
    }

    const nombre1 = parseFloat(parts[1]);
    const operador = parts[2];
    const nombre2 = parseFloat(parts[3]);

    let resultat;

    if (operador === "+") {
      resultat = nombre1 + nombre2;
    } else if (operador === "-") {
      resultat = nombre1 - nombre2;
    } else if (operador === "*") {
      resultat = nombre1 * nombre2;
    } else if (operador === "/") {
      if (nombre2 === 0) {
        throw new RangeError("No es pot dividir entre zero");
      }
      resultat = nombre1 / nombre2;
    } else if (operador === "%") {
      if (nombre2 === 0) {
        throw new RangeError("No es pot calcular el mòdul entre zero");
      }
      resultat = nombre1 % nombre2;
    }

    const text = nombre1 + " " + operador + " " + nombre2 + " = " + resultat;
    console.log(text);
    missatge.textContent = text;

  } catch (error) {
    console.log("Error: " + error.message);
    missatge.textContent = "Error: " + error.message;
  }
}

boto.addEventListener("click", calcular);
