

const OPERADORES = ["+", "-", "*", "/"];

const esOperador = (token) => OPERADORES.includes(token);
const esDigito = (c) => c >= "0" && c <= "9";
const esLetra = (c) => (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || c === "_";
const esNumero = (token) => !isNaN(Number(token));


function esInicioDeNegativo(tokens) {
  if (tokens.length === 0) return true;
  const ultimo = tokens[tokens.length - 1];
  return esOperador(ultimo) || ultimo === "(";
}

function tokenizar(texto) {
  const tokens = [];
  let i = 0;

  while (i < texto.length) {
    const c = texto[i];

    if (c === " ") {
      i++;
    } else if (esDigito(c) || c === "." || (c === "-" && esInicioDeNegativo(tokens) && esDigito(texto[i + 1] || ""))) {
      let numero = "";
      if (c === "-") {
        numero = "-";
        i++;
      }
      while (i < texto.length && (esDigito(texto[i]) || texto[i] === ".")) {
        numero += texto[i];
        i++;
      }
      if (isNaN(Number(numero))) {
        throw new Error(`Número no válido: ${numero}`);
      }
      tokens.push(numero);
    } else if (esLetra(c)) {
      let variable = "";
      while (i < texto.length && (esLetra(texto[i]) || esDigito(texto[i]))) {
        variable += texto[i];
        i++;
      }
      tokens.push(variable);
    } else if (esOperador(c) || c === "(" || c === ")") {
      tokens.push(c);
      i++;
    } else {
      throw new Error(`Carácter no permitido: "${c}"`);
    }
  }

  return tokens;
}


function validarTokens(tokens) {
  if (tokens.length === 0) {
    throw new Error("Escribe una expresión después del signo =.");
  }

  let esperaOperando = true;
  let abiertos = 0;

  for (const token of tokens) {
    if (token === "(") {
      if (!esperaOperando) throw new Error('Falta un operador antes de "(".');
      abiertos++;
    } else if (token === ")") {
      if (esperaOperando) throw new Error('El paréntesis ")" está mal colocado.');
      abiertos--;
      if (abiertos < 0) throw new Error("Hay un paréntesis de cierre sin su apertura.");
    } else if (esOperador(token)) {
      if (esperaOperando) throw new Error(`El operador "${token}" está mal colocado.`);
      esperaOperando = true;
    } else {
      if (!esperaOperando) throw new Error(`Falta un operador antes de "${token}".`);
      esperaOperando = false;
    }
  }

  if (esperaOperando) throw new Error("La expresión está incompleta.");
  if (abiertos !== 0) throw new Error("Hay paréntesis sin cerrar.");
}
