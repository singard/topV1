var listOfTop = [];
function addTopInListTop(formTop){
    var nameTop = document.formTop.nameTop.value;
    var pokemon1 = document.formTop.top1.value;
    var pokemon2 = document.formTop.top2.value;
    var pokemon3 = document.formTop.top3.value;
    var pokemon4 = document.formTop.top4.value;
    var pokemon5 = document.formTop.top5.value;
    var listPK = [];
    listPK.push(mapPokemon.get(pokemon1));
    listPK.push(mapPokemon.get(pokemon2));
    listPK.push(mapPokemon.get(pokemon3));
    listPK.push(mapPokemon.get(pokemon4));
    listPK.push(mapPokemon.get(pokemon5));

    souslistPokemon = new listPokemon(nameTop,listPK)
    listOfTop.push(souslistPokemon);


    console.log(listPK);
    console.log(listOfTop);
    
    console.log('nameTop :'+nameTop);
    console.log('pokemon1 :'+pokemon1);
    console.log('pokemon2 :'+pokemon2);
    console.log('pokemon3 :'+pokemon3);
    console.log('pokemon4 :'+pokemon4);
    console.log('pokemon5 :'+pokemon5);
    
}

