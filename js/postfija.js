
const PRIORIDAD = { "+": 1, "-": 1, "*": 2, "/": 2 };

function infijaAPostfija(tokens) {
  const salida = [];
  const pila = [];

  for (const token of tokens) {
    if (esOperador(token)) {
      
      while (
        pila.length > 0 &&
        esOperador(pila[pila.length - 1]) &&
        PRIORIDAD[pila[pila.length - 1]] >= PRIORIDAD[token]
      ) {
        salida.push(pila.pop());
      }
      pila.push(token);
    } else if (token === "(") {
      pila.push(token);
    } else if (token === ")") {
      while (pila[pila.length - 1] !== "(") {
        salida.push(pila.pop());
      }
      pila.pop(); 
    } else {
      salida.push(token);
    }
  }

  while (pila.length > 0) {
    salida.push(pila.pop());
  }

  return salida;
}
