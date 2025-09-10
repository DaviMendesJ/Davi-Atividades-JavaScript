
console.log(Tratar())

function Tratar(){

    var array_nomes = []
    
    while( array_nomes.length < 4){
        var nome1 = prompt('Digite um nome')
        document.writeln(nome1)
        array_nomes.push(nome1);

        var nome2 = prompt('Digite outro nome')
        document.writeln(nome2)
        array_nomes.push(nome2);


        var nome3 = prompt('Digite mais um')
        document.writeln(nome3)
        array_nomes.push(nome3);


        var nome4 = prompt('Digite o ultimo nome!')
        document.writeln(nome4)
        array_nomes.push(nome4);
    }
    var array_inverso = array_nomes.toReversed();
    array_novo = array_inverso.join();
    
    console.log(array_inverso.join());
    console.log(array_nomes.join());
}

// Exibido no console.