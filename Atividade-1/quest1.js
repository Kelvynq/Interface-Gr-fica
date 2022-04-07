const vet=[1, 60, 232, 7, 25, 76, 29,74, 92];
const lista=[];
let soma=0;

vet.filter((valor) => {
    if(valor > 60 && valor < 300){
        lista.push(valor);
    }
});
lista.forEach((valor) => {
    soma+=valor;
})

console.log(`A lista dos valores maiores que 60 é: ${lista} e a soma dos elementos da lista é ${soma}`);