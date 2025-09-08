let Num1 = prompt('Digite um numero qualquer');
console.log(Num1)
let Num2 = prompt('Digite um outro numero qualquer');
console.log(Num2)
let Num3 = prompt('Digite outro numero');
console.log(Num3)

function Soma_comparar(n1,n2,n3){
    var n4 = Number(n1) + Number(n2)
    if(n3 > n4){
        console.log('A soma', n4 ,'é menor que o numero', n3)
        return n3
    }else{
        console.log('A soma', n4 ,'é maior que o numero', n3)
        return n4

    }
}
console.log('o maior é', Soma_comparar(Num1,Num2,Num3));

// O QUE FOI COLOCADO NO SCRIPT DO 

//function Pergunta(){
//        var n1 = prompt('Digite um numero')
//        document.write;
//        var n2 = prompt('Digite um numero novo')
//        document.write;
//        var n3 = prompt('Digite mais um ultimo numero')
//        document.write;
//        var n4 = Number(n1) + Number(n2)
//       if(n3 > n4){
//            console.log('A soma', n4 ,'é menor que o numero', n3)
//            return n3
//        }else{
//       console.log('A soma', n4 ,'é maior que o numero', n3)
//            return n4
//        }
//    }
//    console.log(Pergunta)