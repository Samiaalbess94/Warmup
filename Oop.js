// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares
// its methods across different instances.


// function randInt(n) {
//     return Math.floor(Math.random() * (n + 1));
// }

// function makeGame(upperbound){
//   var upper=upperbound;
//   var rand=randInt(upper)
//   var counter=0;
//   return {
//   	guessMyNumber:function(n){
//   		counter++;
// 	    if (n > upper) {
// 	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
// 	    } else if (n === rand) {
// 	      return "You guessed my number!";
// 	    }
// 	    return "Nope! That wasn't it!";
//   	},
//   	giveUp:function(){
//     	return rand;
//   	},
//   	numOfGuesses:function(){
//     	return counter;
//   	}
//   }
// }

   var counter=0; //to count gussed numbers
  function randInt(n) {//function to find any random num
    return Math.floor(Math.random() * (n + 1));
  }
   
  function makeGame(upperbound){// to make game instance
    var instance = {}
    var upper = upperbound;
    var rand=randInt(upper);
    instance.giveUp=giveUp;
    instance.numOfGuesses=numOfGuesses;
    
    instance.guessMyNumber=guessMyNumber;

    return instance;//return obj
  }

  var guessMyNumber = function(n){

      counter++;
      if (this.n > this.upper) {
       return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
     } else if (this.n === this.rand) {
       return "You guessed my number!";
     }
     return "Nope! That wasn't it!";
   }
  
  var giveUp = function(){
    return this.rand;
  } 
  var numOfGuesses = function(){
    return counter;
  }








