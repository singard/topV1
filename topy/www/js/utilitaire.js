function createListVisu(mapPokemon){ 
    var generalFrag = document.createDocumentFragment();
    for(let i=1; i<=5;i++){
        select = document.createElement("SELECT");
        var a = document.createAttribute("id");
        a.value = "top"+i;
        select.setAttributeNode(a);
        
        for (const [key, value] of mapPokemon.entries()) {
            console.log(`${key} = ${value.name}`);
            
            option = document.createElement("OPTION");
            option.innerText = key;
            select.appendChild(option);
        }  

        generalFrag.appendChild(select); 
        document.getElementById("div5ListPokemon").appendChild(generalFrag);
    }

    console.log('page top is fully loaded'); 

}

function addTopInListTop(formTop){
    console.log('alerte ! sa passe ici');
   
    
}
