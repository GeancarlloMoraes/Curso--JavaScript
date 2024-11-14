// Isso se chama RECURSIVIDADE

function fatorial(n){
    if(n == 1) {
        return 1 
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))


/*
5 fatorial é a mesma coisa que 5 x 4 x 3 x 2 x 1. Só que se você analisar 4 x 3 x 2 x 1 é quatro fatorial.
Então eu posso rescrever que 5 fatorial é a mesma coisa que 5 vezes 4 fatorial

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

O fatorial de um numero pode ser calculado baseado no fatorial de outro.
Por exemplo: se eu tenho de forma generica o fatorial de n! esse fatorial de n! é sempre n vezes n-1 fatorial (n-1)!
n! = n x (n-1)!

a nao ser que seja o fatorial de 1, porque matematicamente o fatorial de 1 é 1
*/