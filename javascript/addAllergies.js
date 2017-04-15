//Strategy
//make a model for the allergy list
//make a div where allergies will be displayed
//each allegry will have an edit and delete button next to it
//be able to add a new allergy.
//  - have a text input and add button
//  - adding will update the model and we go through the model and append with jquery a new allergy object


$(document).ready(function(){
    var allergiesList = [];
    
    //TODO: need to make sure can't add duplicates
    
    var updateAllergies = function(){
        $("#myAllergies").empty();//so we don't add repeats
        //go through and update the allergy list
        for(allergy of allergiesList){
            $("#myAllergies").append('<div class="allergyRow" id="'+allergy+'"Row"><button class="deleteButton" id="'+allergy+'"'+'type="button">Delete</button><p class="allergyName">'+allergy+'</p></div>');
        }
    };

    //http://stackoverflow.com/questions/1359018/in-jquery-how-to-attach-events-to-dynamic-html-elements
    $("body").on("click", ".deleteButton",function(){
        //remove that allergy from the list
        allergiesList.splice(allergiesList.indexOf(this.id),1); //https://bytearcher.com/articles/how-to-delete-value-from-array/
        updateAllergies();
    });

   
    
    $("body").on("click", "#common",function(){
         var checked = $("#addCommon").children().children("input:checked").map(function() {
            return this.id;
        }).get(); //gets all the values of the checked boxes
        
        for(allergy of checked){
            if (!allergiesList.includes(allergy)){ //don't add repeats
                allergiesList.push(allergy); 
            }
        }

        $("#addCommon").children().children("input:checked").prop("checked", false); //unchecks all boxes

        updateAllergies();
    });

    //http://stackoverflow.com/questions/16011312/execute-function-on-enter-key
    $('body').on("keydown", function(e){
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            var newAllergy = $("#newAllergy").val();
            $("#newAllergy").val("");
            if (!allergiesList.includes(newAllergy)){ //don't add repeats
                //add new allergy
                allergiesList.push(newAllergy);
                updateAllergies();
            }
        }
    });

    $('body').on("click","#submitNewAllergy", function(){
        var newAllergy = $("#newAllergy").val();
        $("#newAllergy").val("");
        if (!allergiesList.includes(newAllergy)){ //don't add repeats
            //add new allergy
            allergiesList.push(newAllergy);
            updateAllergies();
        }
    });
    

});//keep at bottom of the file