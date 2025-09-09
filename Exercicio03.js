var num_qql = prompt('Digite um número que você goste')
document.writeln(num_qql)
let num_divi = (num_qql % 2)

if(num_divi == 0 ) {
    console.log('Esse seu número é par.')
    if(num_qql >= 0) {
        console.log('Esse número positivo')
    }
}else{
    console.log('Esse seu número é impar.')
    if(num_qql < 0) {
        console.log('Esse número negativo')
}
}