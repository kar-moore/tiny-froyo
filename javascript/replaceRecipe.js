
	  var currentAllergen;
	
	  //when user clicks on tofu 
	  $(document).ready(function(){
		$(".tofu").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#buttonSpace').remove();
			}
			var list = '<div id="replacementList"><ul><li class="replacement" id="azuki1"><div class="rep-title">azuki beans</div></li><li class="replacement" id="chickpea1"><div class="rep-title">chickpea and rice paste</div></li></ul></div>';
			var replaceButton = '<div id="buttonSpace"><br><button id="resetButton" type="button" class="btn btn-success btn-lg" onclick="resetChosenReplacement()" style="">Reset replacements for tofu</button></div>';
	
			$('#firstColumn').append(list+replaceButton);
			$('#azuki1').append('<ul> <div class="rep-description"><li>Source of plentiful protein</li><li>High in fiber</li></div>'
						+'<li class="more"><div class="tooltipDiv" >more.. '
						+'<span class="tooltiptext">Help manage diabetes'
						+'<br>Increases antioxidant intake'
						+'</span></div></li></ul>');
			
			$('#chickpea1').append('<ul><div class="rep-description"><li>Package of protein and vitamins</li><li>Keep blood sugar levels stable</li></div>'
						+'<li class="more"><div class="tooltipDiv" >more.. '
						+'<span class="tooltiptext">Boosts digestion'
						+'<br>Increases feeling of fullness.</span></div></li></ul>');
			
			$('#header').html('Replacing: Tofu');
			
			addReplacementListener(this);
			addTooltipListener();
			currentAllergen = "tofu";

		});

		
		$(".soy_sauce").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#buttonSpace').remove();
			}
			var list = '<div id="replacementList"><ul><li class="replacement" id="coconut1"><div class="rep-title">coconut aminos</div></li><li class="replacement" id="canola1"><div class="rep-title">canola oil</div></li></ul></div>';
			var replaceButton = '<div id="buttonSpace"><br><button id="resetButton" type="button" class="btn btn-success btn-lg" onclick="resetChosenReplacement()" style="">Reset replacements for soy sauce</button></div>';
			$('#firstColumn').append(list+replaceButton);	
			$('#coconut1').append('<ul> <div class="rep-description"><li>Comes from the nutrient rich sap of the coconut trees</li><li>Contains 17 amino acids</li></div>'
				+'<li class="more"><div class="tooltipDiv" >more.. '
				+'<span class="tooltiptext" id="d">*Reduce risk of diabetes'
				+'<br>*Regulates cholesterol'
				+'</li></ul>');
			
			$('#canola1').append('<ul> <div class="rep-description"><li>Low in saturate fat, high in unsaturated fat</li><li>Includes Omega-3 fatty acids</li></div>'
				+'<li class="more"><div class="tooltipDiv" >more..'
				+'<span class="tooltiptext">*Good for heart health'
				+'<br>*Lowers cholesterol'
				+'</div></li></ul>');
			$('#header').html('Replacing: Soy sauce');
		
			addReplacementListener(this);
			addTooltipListener();
			currentAllergen = "soy sauce";
			
		});
	   });

	function addTooltipListener(){
$		('.tooltiptext').click(function(e){
			e.stopPropagation();
		});
		
	}	
	   
	function addReplacementListener(allergen){
	  $('.replacement').on('click', function() {
			var replacementName = this.innerHTML.split('<ul>')[0];
			var allergenClass = $('.'+allergen.className.split(" ")[1]);
			allergenClass.html(replacementName);	
			allergenClass.css('background-color', "lightgreen");
			allergenClass.css('color', "black");
    		setTimeout(complete1, 300);
    		function complete1() {
    			allergenClass.css('background-color', "white");
				allergenClass.css('color', "green");
    			setTimeout(complete2, 300);
    		}
    		function complete2() {
    			allergenClass.css('background-color', "lightgreen");
				allergenClass.css('color', "black");
    			setTimeout(complete3, 300);
    		}
    		function complete3() {
    			allergenClass.css('background-color', "lightgreen");
				allergenClass.css('color', "black");
    		}	
    		// remove "selected" from all replacements
    		$(".rep-title").each( function() {
    			$(this).removeClass("selected");
    		});

    		// add class "selected"	to this replacement
    		$(this).find(".rep-title").addClass("selected");		
	  });
	}
	
	function printRecipe(){
		var recipeCSS = new String ('<link href="https://kar-moore.github.io/tiny-froyo/stylesheets/styles-master.css" rel="stylesheet" type="text/css" >');
		var mainCSS = new String('<link href="https://kar-moore.github.io/tiny-froyo/stylesheets/recipe_style.css" rel="stylesheet" type="text/css" >');
		window.frames["print_frame"].document.body.innerHTML= recipeCSS + mainCSS + document.getElementById('mainColumnExceptPrintButton').innerHTML;
        window.frames["print_frame"].window.focus();
        window.frames["print_frame"].window.print();	
	}
	
	function resetChosenReplacement(){

		// remove "selected" from all replacements
		$(".rep-title").each( function() {
    			$(this).removeClass("selected");
    		});

		var allergenToReset;
		if(currentAllergen == "tofu"){
			allergenToReset = $('.tofu');
			allergenToReset.html('tofu');
		}else if(currentAllergen == "soy sauce"){
			allergenToReset = $('.soy_sauce');
			allergenToReset.html('soy sauce');
		}
		allergenToReset.css('background-color', "#ed6363");
		allergenToReset.css("color", "white");
		allergenToReset.css('font-weight', "normal");
	}

