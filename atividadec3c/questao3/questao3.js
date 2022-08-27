const grade = document.querySelector("#grade");
const result = document.querySelector("#result");
const button = document.querySelector("#checkResult");

button.onclick = () => {
    if(isValidResult(grade.value) == true){
        if(grade.value >= 38){
            result.value = `${rounding(grade.value)}(Aprovado)`;          
        } else {
            result.value = `${grade.value}(Reprovado)`;  
        }
    } else{
        result.value = isValidResult(grade.value);  
    }
}

//Verifica se a nota inserida é um número válido entre 0 e 100
const isValidResult = (number) => {
    let result;
    
    number >= 0 && number <= 100 ? result = true : result = 'Insira uma nota válida entre 0 e 100';
    
    return result;
}

//Arredonda a nota se possível
const rounding = (number) => {
    number = Number.parseFloat(number);

    if(((number + 4) % 5) >= 2 && ((number + 4) % 5) <= 3){
        number = (number + 4) - ((number + 4) % 5);
    } else{
        number = number;     
    }
    
    return number;
}



