// Funciones arrows (funciones flecha)

function suma(){
    let number1 = Number(document.getElementById('numero1').value);
    let number2 = Number(document.getElementById('numero2').value);
    let result = number1 + number2;
    // debemos retornar el resultado que queremos dar con la funciona
    document.getElementById('resultado').value = result;
    document.getElementById('result2').innerHTML = result;
}
function resta(){
    let number1 = Number(document.getElementById('numero1').value);
    let number2 = Number(document.getElementById('numero2').value);
    let result = number1 - number2;
    // debemos retornar el resultado que queremos dar con la funciona
    document.getElementById('resultado').value = result;
    document.getElementById('result2').innerHTML = result;   
}


const multiplicar=()=>{
    let number1 = Number(document.getElementById('numero1').value);
    let number2 = Number(document.getElementById('numero2').value);
    let result = number1 * number2;
    // debemos retornar el resultado que queremos dar con la funciona
    document.getElementById('resultado').value = result;
    document.getElementById('result2').innerHTML = result;
}

const dividir=()=>{
    let number1 = Number(document.getElementById('numero1').value);
    let number2 = Number(document.getElementById('numero2').value);
    let result = number1 / number2;
    // debemos retornar el resultado que queremos dar con la funciona
    document.getElementById('resultado').value = result;
    document.getElementById('result2').innerHTML = result;
}

const porcentaje=()=>{
    let number1 = Number(document.getElementById('numero1').value);
    let number2 = Number(document.getElementById('numero2').value);
    let result = (number1 * number2) / 100;
    // debemos retornar el resultado que queremos dar con la funciona
    document.getElementById('resultado').value = result;
    document.getElementById('result2').innerHTML = result;
}

