function luidyMoura(number){
    let luidyMouraList = [];
    for (let i = 1; i <= number; i++) {
        if (i % 9 == 0 && i % 5 == 0) {
            luidyMouraList.push('LuidyMoura');
        } else if (i % 9 == 0) {
            luidyMouraList.push('Moura');
        } else if (i % 5 == 0) {
            luidyMouraList.push('Luidy');
        } else {
            luidyMouraList.push(i)
        } 
    }
    
    return luidyMouraList;
}

//luidyMoura(45);

/*
//resto(10, 9) faz o mesmo que 10 % 9
function resto(dividendo, divisor) {
    let quociente = Number.parseInt(dividendo / divisor);
    let resto = dividendo - (divisor * quociente);

    return resto;	      
}
*/

