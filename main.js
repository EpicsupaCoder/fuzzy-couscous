menu_list_array=["Margarita pizza","veg pizza","chef's special","another chef's special","yet another chef's special(if he feels like it)"]
function getmenu() {
   var htmldata;
   htmldata="<ol class=menu_list>"
   menu_list_array.sort();
   for (var i=0; i<menu_list_array.length; i++){
       
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>' } htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;

















   }
