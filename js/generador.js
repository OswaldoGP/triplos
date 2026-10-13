
function generarCuadruplos(postfija, destino) {
  const pila = [];
  const cuadruplos = [];
  let contador = 1;

  for (const token of postfija) {
    if (esOperador(token)) {
      const arg2 = pila.pop();
      const arg1 = pila.pop();
      const resultado = `t${contador}`;
      cuadruplos.push({ numero: contador, operador: token, arg1, arg2, resultado });
      pila.push(resultado);
      contador++;
    } else {
      pila.push(token);
    }
  }

  if (destino) {
    cuadruplos.push({ numero: contador, operador: "=", arg1: pila.pop(), arg2: "-", resultado: destino });
  }

  return cuadruplos;
}

function generarTriplos(postfija, destino) {
  const pila = [];
  const triplos = [];
  let contador = 0;

  for (const token of postfija) {
    if (esOperador(token)) {
      const arg2 = pila.pop();
      const arg1 = pila.pop();
      triplos.push({ numero: contador, operador: token, arg1, arg2 });
      pila.push(`(${contador})`);
      contador++;
    } else {
      pila.push(token);
    }
  }

  if (destino) {
    triplos.push({ numero: contador, operador: "=", arg1: pila.pop(), arg2: "-" });
  }

  return triplos;
}

function evaluarPostfija(postfija) {
  const pila = [];

  for (const token of postfija) {
    if (esOperador(token)) {
      const b = pila.pop();
      const a = pila.pop();
      if (token === "+") pila.push(a + b);
      if (token === "-") pila.push(a - b);
      if (token === "*") pila.push(a * b);
      if (token === "/") {
        if (b === 0) throw new Error("No se puede dividir entre cero.");
        pila.push(a / b);
      }
    } else if (esNumero(token)) {
      pila.push(Number(token));
    } else {
      return null;
    }
  }

  return Math.round(pila[0] * 1e10) / 1e10;
}
