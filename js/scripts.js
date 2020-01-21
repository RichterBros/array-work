$(document).ready(function() {
    
  
    $("#formOne").submit(function(event) {
              
      event.preventDefault();
    
      
      
      
      var person1Input = $("input#person1").val();
      var person2Input = $("input#person2").val();
      var animalInput= $("input#animal").val();
      var foodInput = $("input#food").val();
      var drinkInput = $("input#drink").val();
      
      var favorites = [person1Input, person2Input, animalInput, foodInput, drinkInput];
 
      $(".person1").text(favorites[0]);
      $(".person2").text(favorites[1]);
      $(".animal").text(favorites[2]);
      $(".food").text(favorites[3]);
      $(".drink").text(favorites[4]);
      
      $("#result").show(); 
     
    
      console.log(favorites);
      
    });
   
    
    
    });
    

   
    

