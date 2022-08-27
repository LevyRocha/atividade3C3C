const sideA = document.querySelector("#sideA");
const sideB = document.querySelector("#sideB");
const sideC = document.querySelector("#sideC");
const button = document.querySelector("#button");
const triangleType = document.querySelector("#triangleType");

button.onclick = () => {
    const a = Number.parseFloat(sideA.value);
    const b = Number.parseFloat(sideB.value);
    const c = Number.parseFloat(sideC.value);

    if(isValidTriangle(a, b, c)){
        triangleType.value = triangle(a, b, c);
    } else {
        triangleType.value = 'Não é possível formar um triângulo com essas medidas';
    }
}

const isValidTriangle = (sideA, sideB, sideC) => {
    
    const condition1 = (sideC + sideB) > sideA;
    const condition2 = (sideC + sideA) > sideB;
    const condition3 = (sideB + sideA) > sideC; 

    let isValid;

    if(condition1 && condition2 && condition3){
        isValid = true;
    }else{
        isValid = false;
    }
    
    return isValid; 
}

const triangle = (sideA, sideB, sideC) => {

    const scalene = 'Escaleno';
    const isosceles = sideA == sideB || sideA == sideC || sideC == sideB;
    const equilateral = sideA == sideB && sideB == sideC;
    
    let triangleType;
    if(equilateral) {
        triangleType = 'Equilátero';
    } else if(isosceles){
        triangleType = 'Isósceles';
    } else {
        triangleType = scalene;
    }
    
    return triangleType;
}

/* Outra opção
function onClick(){
    //Captura as valores inseridos nos inputs
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);
    //console.log(`onClick function: sideA:${sideA}, sideB:${sideB}, sideC:${sideC}`);

    //Utilizando as funções que verificam se é válido e o tipo, devolve para o input o tipo do triângulo;
    if(isValidTriangle(sideA, sideB, sideC)){
        document.getElementById('triangleType').value = triangleType(sideA, sideB, sideC);
    } else {
        document.getElementById('triangleType').value = 'Não é possível formar um triângulo com essas medidas';
    }

}

//Verifica se o triangulo é válido
function isValidTriangle(sideA, sideB, sideC){
    //console.log(`isValidTriangle function: sideA:${sideA}, sideB:${sideB}, sideC:${sideC}`);

    const condition1 = (sideC + sideB) > sideA;
    const condition2 = (sideC + sideA) > sideB;
    const condition3 = (sideB + sideA) > sideC; 
    //console.log(`isValidTriangle function: condition1:${condition1}`);
    //console.log(`isValidTriangle function: condition2:${condition2}`);
    //console.log(`isValidTriangle function: condition3:${condition3}`);

    let isValid;

    if(condition1 && condition2 && condition3){
        isValid = true;
    }else{
        isValid = false;
    }
    
    //console.log(`isValidTriangle function: isValid:${isValid}`);
    return isValid; 
}

//Verifica o tipo do triângulo
function triangleType(sideA, sideB, sideC) {
    //console.log(`triangleType function: sideA:${sideA}, sideB:${sideB}, sideC:${sideC}`);

    const scalene = 'Escaleno';
    const isosceles = sideA == sideB || sideA == sideC || sideC == sideB;
    const equilateral = sideA == sideB && sideB == sideC;
    
    let triangleType;
    if(equilateral) {
        triangleType = 'Equilátero';
    } else if(isosceles){
        triangleType = 'Isósceles';
    } else {
        triangleType = scalene;
    }
    
    //console.log(`triangleType function: triangleType:${triangleType}`);
    return triangleType;
}
*/