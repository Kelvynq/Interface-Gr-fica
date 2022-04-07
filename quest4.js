const ent=281.47;
const moedas=[1.0,0.50,0.25,0.10,0.05,0.01];
const dinheiro=[200,100,50,20,10,5,2];

function leitura(val){
    let valor_Total=val.toFixed(2);
    console.log("Notas: ");
    dinheiro.forEach(nota=>{
        console.log(`${parseInt(valor_Total/nota)} nota(s) de R$ ${nota.toFixed(2)}`);
        valor_Total=(valor_Total%nota).toFixed(2); 
    });
    console.log("Moedas: ");
    moedas.forEach(moeda=>{
        console.log(`${parseInt(valor_Total/moeda)} moeda(s) de R$ ${moeda.toFixed(2)}`);
        valor_Total=(valor_Total%moeda).toFixed(2);
    })
}   
leitura(ent);