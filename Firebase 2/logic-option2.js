// Initialize Firebase
var config = {
  apiKey: "AIzaSyDafg7qD7rfMGBo3abLRKkTbmFo0ZCnOXw",
  authDomain: "project-apex-ce5b8.firebaseapp.com",
  databaseURL: "https://project-apex-ce5b8.firebaseio.com",
  storageBucket: "project-apex-ce5b8.appspot.com",
  messagingSenderId: "74764218032"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
/*
database.ref().set({
  initialBid: initialBid,
  initialBidder: initialBidder,
  highPrice: highPrice,
  highBidder: highBidder
});
console.log(initialBid);
console.log(initialBidder);
console.log(highPrice);
console.log(highBidder);*/
// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot){
  console.log(snapshot);
  if(snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()){
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);
    console.log(highBidder);
    console.log(highPrice);
  } else{
    //highBidder = initialBidder;
    //highPrice = initialBid;
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);
  }
}, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

  // If Firebase has a highPrice and highBidder stored (first case)


    // Set the initial variables for highBidder equal to the stored values.


    // Change the HTML to reflect the initial value


    // Print the initial data to the console.


  // Else keep the initial variables for highBidder equal to the initial values


// If any errors are experienced, log them to console.


// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button

$("#submit-bid").on("click", function(){
    inputName = $("#bidder-name").val().trim();
    inputPrice = parseInt($("#bidder-price").val().trim());
    console.log(inputName);
    console.log(inputPrice);
    if(inputPrice > highPrice){
      alert("You's the highest bidder!");
      database.ref().set({
        highPrice: inputPrice,
        highBidder: inputName
      });
      console.log(highPrice);
      var newHighPrice = highPrice;
      var newHighBidder = highBidder;
      $("#highest-bidder").html(newHighBidder);
      $("#highest-price").html(newHighPrice);
    } else{
      alert("Your bid is too low you fool. SPEND MORE MONEY");
    }
    return false;
});
  // Get the input values


  // Log the Bidder and Price (Even if not the highest)


  // If Then statements to compare against previous high bidder


    // Alert that they are High Bidder


    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable (could have also used the firebase variable)


    // Change the HTML to reflect the new high price and bidder

  // Else tell user their bid was too low via alert


  // Return "false" to allow "enter"
