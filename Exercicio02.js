var Num1 = 3;
var Num2 = 5;
var Num3 = 6;

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

