

//create a function to find what users weight would be on different planets

function calculate(){
      
      var weight= document.getElementById("userWeight").value;
      var planet= document.getElementById("userPlanetChoice").value;
      var newWeight= weight * planet;

      document.getElementById("output").innerHTML= "You weigh " + newWeight + " pounds!";
   
};