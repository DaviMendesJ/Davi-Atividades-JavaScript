var numero_escolhido = prompt('Escolha um número e direi seu sucessor e antecessor.')
document.writeln(numero_escolhido)

if(numero_escolhido > 0){
    var sucessor = Number(numero_escolhido) + Number(1)
    var antecessor = numero_escolhido - 1
}

console.log('Seu número sucessor e antecessor são respectivamente: ', sucessor, 'e ', antecessor )