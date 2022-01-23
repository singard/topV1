
function createListVisu(arrayPokemon){
    document.write("<FORM>"+
    "<SELECT NAME='SelectMenu'>");
    
Nombre = arrayPokemon.length;
for (var i = 1; i <= Nombre; i++){
    document.write("<OPTION>" +arrayPokemon.name+"</SELECT>");
}
document.write("</FORM>");

}