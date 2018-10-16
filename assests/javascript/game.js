// Creates an array that lists out all the alphabet.
    var alphabetArray = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessLeft = 10;
    var guessArray=[];
    

    // Create variables that hold references to the places in the HTML where we want to display things.
    
   
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessLeftText = document.getElementById("guessleft-text");
    var userGuessText = document.getElementById("user-guess-text");

    // This function is run whenever the user presses a key.

    document.onkeyup = function(event) {
    
      if (alphabetArray.indexOf(event.key) > -1) {
      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];


      // Reworked our code from last step to use "else if" instead of lots of if statements.

      
      
      
        
      //add only unique values to array
      if (guessLeft > 0 && guessArray.indexOf(userGuess) === -1) {
        guessLeft--; 
      
      		guessArray.push(userGuess);
          

        //// This logic determines the outcome of the game (win/loss), and increments the appropriate number
        if (userGuess === computerGuess) {
        
         //update result
         wins++;
         //reset
        guessLeft = 10;
        guessArray=[];   
                  
        }
      
      }else if (guessLeft <= 0 ){
        //reset
        guessLeft = 10;
        guessArray=[];
        losses++;
        
      
      
      }

        // Display the user and computer guesses, and wins/losses
        
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessLeftText.textContent = "Guesses Left: " + guessLeft;
        userGuessText.textContent = "Your Guesses So Far: " + guessArray;
    
   
    }
    };