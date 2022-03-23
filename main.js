
// codigo del cuadrado

console.group("cuadrados");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("el area del cuadrado es: " + areaCuadrado);
console.log("el perimetro del cuadrado es: " + ladoCuadrado);
console.log("-------------------------------------------");
console.groupEnd();

// codigo del triangulo
console.group("triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;


console.log("Los lados Del Triangulo son: "

    + ladoTriangulo1
    + ladoTriangulo2
    + baseTriangulo
    + " y el perimetro del triangulo es "
    + perimetroTriangulo
);
console.log("el area del triangulo es: " + areaTriangulo);

console.log("-------------------------------------------");
console.groupEnd();
// codigo del circulo
console.group("circulos");

const radioCirculo = 4;

//Diametro 
const diametroCirculo = radioCirculo * 2; 

//Circunferencia
const perimetroCirculo = Math.PI * diametroCirculo;

//area
const areaCirculo = (radioCirculo * radioCirculo) * Math. PI;


console.groupEnd();
