//A function to make sure the page has loaded
window.addEventListener("load",function(){
    //This function will add highlight to the classList when the field is focuesed on 
    //and remove highlight from the classList when it is not. 
    function setBackground(e){
        if(e.type == "focus"){
            e.target.classList.add("highlight");
        }
        else if(e.type =="blur"){
            e.target.classList.remove("highlight");
        }
    } 

    var fields = document.querySelectorAll(".hilightable");
    for(var i = 0;i<fields.length;i++){
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
        //This remoces the error class from the classList
        fields[i].addEventListener("change", function removeError(e){
            e.target.classList.remove("error");
        });
    }
    
    //This will stop the form from sumbiting and adds the error class to the classList
    document.getElementById("main_Form").addEventListener("submit", function(e) {
        var fields = document.getElementsByClassName("required");
        for(var field of fields){
            if(field.value == null || field.value == ""){
                e.preventDefault();
                field.classList.add("error");
            }
        }            
    });
});