


// Representacion de expresiones aritméticas mediante variables temporales
//r = a + (b - c) * d + ( e / f * g);
// r = a1 + (b1 - c1) * d1 + ( e1 / f1 * g1);

let a1 = 2, b1 = 5, c1 = 3, d1 = 4, e1 = 12, f1 = 3, g1 = 2;

let t1_1 = b1 - c1;
let t1_2 = t1_1 * d1;
let t1_3 = e1 / f1;
let t1_4 = t1_3 * g1;
let t1_5 = a1 + t1_2;
let t1_6 = t1_5 + t1_4;
let r = t1_6;

console.log("Ejercicio 1 : r =", r); // Resultado: 18

//--------------------------------------------------

// x = ((m * n) / (p + q)) * (r * k);
// x = ((m2 * n2) / (p2 + q2)) * (r2 * k2);

let m2 = 4, n2 = 3, p2 = 1, q2 = 5, r2 = 2, k2 = 5;

let t2_1 = m2 * n2;
let t2_2 = p2 + q2;
let t2_3 = t2_1 / t2_2;
let t2_4 = r2 * k2;
let t2_5 = t2_3 * t2_4;
let x = t2_5;

console.log("Ejercicio 2: x =", x); // Resultado: 20

//--------------------------------------------------

//total = (a + b * c) * (d - e) - (f + g);
//total = (a3 + b3 * c3) * (d3 - e3) - (f3 + g3);

let a3 = 2, b3 = 3, c3 = 4, d3 = 10, e3 = 5, f3 = 1, g3 = 2;

let t3_1 = b3 * c3;
let t3_2 = a3 + t3_1;
let t3_3 = d3 - e3;
let t3_4 = t3_2 * t3_3;
let t3_5 = f3 + g3;
let t3_6 = t3_4 - t3_5;
let total = t3_6;

console.log("Ejercicio 3 : total =", total); // Resultado: 67

//--------------------------------------------------

// val = a * (b + (c / d)) - e * (f + g);
// val = a4 * (b4 + (c4 / d4)) - e4 * (f4 + g4);

let a4 = 2, b4 = 3, c4 = 8, d4 = 2, e4 = 3, f4 = 1, g4 = 2;

let t4_1 = c4 / d4;
let t4_2 = b4 + t4_1;
let t4_3 = a4 * t4_2;
let t4_4 = f4 + g4;
let t4_5 = e4 * t4_4;
let t4_6 = t4_3 - t4_5;
let val = t4_6;

console.log("Ejercicio 4 : val =", val); // Resultado: 5

//--------------------------------------------------

//z = (x + y / o) * r + ((a * b + k) / (c + d));
//z = (x5 + y5 / o5) * r5 + ((a5 * b5 + k5) / (c5 + d5));

let x5 = 2, y5 = 12, o5 = 3, r5 = 4, a5 = 3, b5 = 4, k5 = 3, c5 = 2, d5 = 3;

let t5_1 = y5 / o5;
let t5_2 = x5 + t5_1;
let t5_3 = t5_2 * r5;
let t5_4 = a5 * b5;
let t5_5 = t5_4 + k5;
let t5_6 = c5 + d5;
let t5_7 = t5_5 / t5_6;
let t5_8 = t5_3 + t5_7;
let z = t5_8;

console.log("Ejercicio 5 : z =", z); // Resultado: 27