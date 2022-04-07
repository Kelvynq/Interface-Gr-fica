const vet=[1.7, 7.3, 4.6, 8.9, 9.6, 3.2, 5.1]

vet.filter((vet) => {
    if(vet>=0.0 && vet<=4.9){
        console.log(`D`);
    }else if(vet>=5.0 && vet<=6.9){
        console.log(`C`);
    }else if(vet>=7.0 && vet<=8.9){
        console.log(`B`);
    }else if(vet>= 9.0 && vet<=10.0){
        console.log(`A`);
    }
});