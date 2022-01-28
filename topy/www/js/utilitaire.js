function createListVisu(mapPokemon){ 
    var generalFrag = document.createDocumentFragment();

    for(let i=1; i<=5;i++){
        select = document.createElement("SELECT");
        var a = document.createAttribute("id");
        a.value = "top"+i;
        select.setAttributeNode(a);
        a = document.createAttribute("class");
        a.value = "form-select form-select-lg mb-3";
        select.setAttributeNode(a);
        a = document.createAttribute("aria-label");
        a.value = ".form-select-lg example";
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
function listTopCreateList (){
    var generalFrag = document.createDocumentFragment();
            console.log('taille du localStorage : '+localStorage.length);
            for (var key in localStorage){
                if (key !== "nameListPrincipale"){
                    let objLinea = localStorage.getItem(key);
                let objJson = JSON.parse(objLinea);
        
                //si l'object existe et si l'object ressemble à mes object dans localstorage ( des extention peuvent avoir des info dans localstorage)
                if (objJson !== null && objJson.nameTop!== null){
                    console.log("non null : "+objJson.nameTop);
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.innerText = objJson.nameTop;
                    a.href="view.html";
                    
                    a.onclick="createView('"+objJson.nameTop+"')";

                    var onclick = document.createAttribute("onClick");
                    onclick.value = "createView('"+objJson.nameTop+"')";;
                    a.setAttributeNode(onclick);
                    
                    li.appendChild(a);
                    generalFrag.appendChild(li); 

                }

                }
                

            }
            document.getElementById("lTop").appendChild(generalFrag);
}
function createView(nameList){
    localStorage["nameListPrincipale"] = nameList;
}

function getCreateView(){
    console.log("lol "+ localStorage.getItem("nameListPrincipale"));
}