
function MediaNotas(){

    var nota1 = Number(prompt('Qual sua primeira nota'))
    var peso1 = Number(prompt('Qual o peso dessa nota?'))
    

    var nota2 = Number(prompt('Qual sua segunda nota'))
    var peso2 = Number(prompt('Qual o peso dessa nota?'))

    var nota3 = Number(prompt('Qual sua terceira nota'))
    var peso3 = Number(prompt('Qual o peso dessa nota?'))

    var mediatotal1 = nota1 * peso1
    var mediatotal2 = nota2 * peso2
    var mediatotal3 = nota3 * peso3

    var somaMedia = mediatotal1 + mediatotal2 + mediatotal3

    var mediatotal =  somaMedia / 3

    document.writeln(mediatotal)
    
    
}

