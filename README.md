# Triplos y Cuádruplos

Página web que recibe una expresión matemática y muestra su **procedimiento en triplos y cuádruplos**, además del **resultado** de la operación.

## Árbol del proyecto

```
triplos-cuadruplos/
├── index.html          Estructura de la página
├── README.md           Documentación
├── css/
│   └── estilos.css     Diseño
└── js/
    ├── tokenizador.js  Separa el texto en tokens y valida la expresión
    ├── postfija.js     Convierte de infija a postfija (algoritmo de la pila)
    ├── generador.js    Genera triplos, cuádruplos y calcula el resultado
    └── main.js         Botones, alertas y dibujo de las tablas
```

## Uso

1. Abre `index.html` en el navegador.
2. Escribe una operación, por ejemplo `r = a + b / c * d` o `(2 + 3) * 4`.
3. Pulsa **Calcular** (o Enter). Pulsa **Limpiar** para empezar de nuevo.

Si la expresión tiene variables, se muestran las tablas pero no un valor numérico.
Las alertas avisan de errores como paréntesis sin cerrar, operadores mal puestos, caracteres no permitidos o división entre cero.

## Cómo funciona

1. **Tokenizar:** el texto se divide en números, variables, operadores y paréntesis.
2. **Validar:** se revisa que la expresión esté bien formada.
3. **Postfija:** con una pila se ordena la expresión según la jerarquía (`* /` antes que `+ -`) y los paréntesis.
4. **Generar:** se recorre la postfija con una pila; cada operador crea una fila.
   - **Triplos:** `(operador, arg1, arg2)`; los temporales son el número de fila `(0)`, `(1)`...
   - **Cuádruplos:** `(operador, arg1, arg2, resultado)`; los temporales son `t1`, `t2`...

### Ejemplo: `r = a + b / c`

| # | Operador | Arg 1 | Arg 2 |   | # | Operador | Arg 1 | Arg 2 | Resultado |
|---|----------|-------|-------|---|---|----------|-------|-------|-----------|
| 0 | /        | b     | c     |   | 1 | /        | b     | c     | t1        |
| 1 | +        | a     | (0)   |   | 2 | +        | a     | t1    | t2        |
| 2 | =        | (1)   | -     |   | 3 | =        | t2    | -     | r         |

## Publicación en GitHub Pages

1. Crea un repositorio y sube la carpeta del proyecto.
2. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`.
3. La página quedará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
