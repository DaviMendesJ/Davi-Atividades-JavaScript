var altura = Number(prompt('Qual a sua altura?'))
document.writeln(altura)
var peso = Number(prompt('Qual o seu peso? (É fundamental que responda)'))
document.writeln(peso)

var imc = peso / (altura**2)

if(imc > 0){
    if(imc <= 18.5){
        console.log('Voce está abaixo do peso');

    }
    else if(18.5 < imc && imc < 24.9){
        console.log('Voce está no peso ideal');
        
    }
    else if(24.9 < imc && imc <= 29.9){
        console.log('Voce está levemento acima do peso');
        
    }
    else if(30 < imc && imc <= 34.9){
        console.log('Voce está com obesidade grau 1');
    }
    else if(35 < imc && imc <= 39.9){
        console.log('Voce está com obesidade grau 2');
        
    }
    else if(imc >= 40){
        console.log('Voce está com obesidade grau 3');
        
    }
}