
const entrada = document.getElementById("operacion");
const alerta = document.getElementById("alerta");
const textoResultado = document.getElementById("resultado");
const tablaTriplos = document.getElementById("tablaTriplos");
const tablaCuadruplos = document.getElementById("tablaCuadruplos");

const TEXTO_INICIAL = "Aquí aparecerá el resultado.";

function mostrarAlerta(mensaje) {
  alerta.textContent = mensaje;
  alerta.classList.remove("oculto");
}

function ocultarAlerta() {
  alerta.textContent = "";
  alerta.classList.add("oculto");
}

// Separa "r = a + b" en destino "r" y expresión "a + b"
function separarAsignacion(texto) {
  const limpio = texto.trim();
  if (limpio === "") throw new Error("Escribe una operación.");

  const partes = limpio.split("=");
  if (partes.length === 1) return { destino: null, expresion: limpio };
  if (partes.length > 2) throw new Error("Solo se permite un signo = en la operación.");

  const destino = partes[0].trim();
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(destino)) {
    throw new Error("A la izquierda del = debe ir una variable (ejemplo: r).");
  }
  return { destino, expresion: partes[1] };
}

function dibujarTriplos(triplos) {
  let html = "<table><tr><th>#</th><th>Operador</th><th>Arg 1</th><th>Arg 2</th></tr>";
  for (const fila of triplos) {
    html += `<tr><td>${fila.numero}</td><td>${fila.operador}</td><td>${fila.arg1}</td><td>${fila.arg2}</td></tr>`;
  }
  tablaTriplos.innerHTML = html + "</table>";
}

function dibujarCuadruplos(cuadruplos) {
  let html = "<table><tr><th>#</th><th>Operador</th><th>Arg 1</th><th>Arg 2</th><th>Resultado</th></tr>";
  for (const fila of cuadruplos) {
    html += `<tr><td>${fila.numero}</td><td>${fila.operador}</td><td>${fila.arg1}</td><td>${fila.arg2}</td><td>${fila.resultado}</td></tr>`;
  }
  tablaCuadruplos.innerHTML = html + "</table>";
}

function limpiarResultados() {
  textoResultado.textContent = TEXTO_INICIAL;
  tablaTriplos.innerHTML = "";
  tablaCuadruplos.innerHTML = "";
}

function calcular() {
  ocultarAlerta();
  limpiarResultados();

  try {
    const { destino, expresion } = separarAsignacion(entrada.value);
    const tokens = tokenizar(expresion);
    validarTokens(tokens);

    const postfija = infijaAPostfija(tokens);
    const cuadruplos = generarCuadruplos(postfija, destino);
    const triplos = generarTriplos(postfija, destino);

    if (cuadruplos.length === 0) {
      throw new Error("Escribe una operación con al menos un operador (ejemplo: 2 + 3).");
    }

    const valor = evaluarPostfija(postfija);
    const nombre = destino ? `${destino} = ` : "";

    if (valor !== null) {
      textoResultado.textContent = `${nombre}${valor}`;
    } else {
      textoResultado.textContent = `${nombre}${tokens.join(" ")} (tiene variables, no se calcula un valor numérico)`;
    }

    dibujarTriplos(triplos);
    dibujarCuadruplos(cuadruplos);
  } catch (error) {
    mostrarAlerta(error.message);
  }
}

function limpiar() {
  entrada.value = "";
  ocultarAlerta();
  limpiarResultados();
  entrada.focus();
}

document.getElementById("btnCalcular").addEventListener("click", calcular);
document.getElementById("btnLimpiar").addEventListener("click", limpiar);
entrada.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") calcular();
});
