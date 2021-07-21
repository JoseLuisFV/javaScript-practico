// Código Cuadrado
console.group("Cuadrados")
const lado = 5;
const perimetroCuadrado = lado * 4;
console.log("El perimetro de un cuadrado de 5 cm de lado es " + perimetroCuadrado + "cm")

const areaCuadrado = lado * lado;
console.log("El area de un cuadrado de 5 cm de lado es " + areaCuadrado + "cm^2")

console.groupEnd();

// Código del triángulo
console.group("Triangulos");
const ladoUno = 6;
const ladoDos = 6;
const ladoTres = 4;
console.log(
    "Los lados del triángulo miden: "
     + ladoUno + "cm, "
     + ladoDos + "cm, "
     + ladoTres + "cm"
);
const perimetroTriangulo = ladoUno + ladoDos + ladoTres;
console.log("El perimetro de este triángulo es " + perimetroTriangulo + "cm.");
const base = 4;
const altura = 5.5;
const areaTriangulo = base * altura / 2
console.log("El area de este triángulo es " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del circulo
console.group("Circulos");
const diametro = 8;
const radio = 4;
const circunferenciaCiculo = diametro * Math.PI;
console.log("La circunferencia de un diametro de " + diametro + "cm es " + circunferenciaCiculo + "cm");

const areaCirculo = Math.PI * (radio * radio);
console.log("El area de un circulo de radio de " + radio + "cm es " + areaCirculo + "cm^2");
console.groupEnd();
