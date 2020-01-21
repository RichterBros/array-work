$(document).ready(function() {
    
  
    $("#formOne").submit(function(event) {
              
      event.preventDefault();
    
      
      
      
      var person1Input = $("input#person1").val();
      var person2Input = $("input#person2").val();
      var animalInput= $("input#animal").val();
      var foodInput = $("input#food").val();
      var drinkInput = $("input#drink").val();
      
      var favorites = [person1Input, person2Input, animalInput, foodInput, drinkInput];
      
      var person = favorites.slice()
      
      person.push("john", "jason")
      

      $(".person1").text(favorites[0]);
      $(".person2").text(favorites[1]);
      $(".animal").text(favorites[2]);
      $(".food").text(favorites[3]);
      $(".drink").text(favorites[4]);
      
      $(".person3").text(person[5]);
      $(".person4").text(person[6]);
      
      $("#result").show(); 
     

    
      console.log(person);
      
    });
   
    
    
    });
    

   
    

