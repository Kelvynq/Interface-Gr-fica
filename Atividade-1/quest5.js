function Num_Primos(inicio=0, fim=100){
    if(inicio>fim){
        let t=inicio;
        inicio=fim;
        fim=t;
    }
    for(let i=inicio; i<=fim; i++){
        let j=1;
        veri=0;
        while(j<=fim){
            if(i%j==0){
                veri++;
            }else if(i==1){
                veri=3;
                break;                
            }
            j++;
        }
        if(veri>2){
        }else{
            console.log(`${i} é primo`);
        }
    }
}
Num_Primos(100, 0);