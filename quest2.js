const progressao={
    id:1,
    name:'valores',
    n:15,
    a1:3,
    e:5
}

const calculaProgreAritmetico=(valores)=>{
    const {n,a1,e}=valores;
    let soma=0;
    let n_Termos=[a1];
    for (let i=1; i<=n; i++) {
        n_Termos[i] = a1+(i-1)*e;
        console.log(`Termo[${i}] = ${n_Termos[i]}`);
    }
    soma = n * (a1 + n_Termos[n]) / 2;
    console.log(`Soma dos termos da progressao Aritmetica: ${soma}`);
}

calculaProgreAritmetico(progressao);

const calculaProgreGeometrica = (valores) => {
    const { n, a1, e } =  valores;
    let soma = 0;
    const nTermos = [a1];

    for(let i=1; i<=n; i++) {
        nTermos[i] = a1*Math.pow(e,(i-1));
        console.log(`Termo[${i}] = ${nTermos[i]}`);
    }
    soma= a1*(1-Math.pow(e,n)/(1-e));
    console.log(`Soma dos termos da progressao geometrica: ${soma}`);
}
calculaProgreGeometrica(progressao);