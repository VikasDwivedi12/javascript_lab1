let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    //Set the test text
    document.getElementById("inputText").value = testText;

    //Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    //Change the button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End test";
    button.onclick = endTest;
}

function endTest(){
    endTime = new Date().getTime();

    //disable user inputText
    document.getElementById("userInput").readOnly = true;

    //calculate time elapsed and wpm
    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById("userInput").value;

    //Split the text using regex to count the words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word != "";
    }).length;

    var wpm = 0; //default value

    if(timeElapsed != 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords/timeElapsed) * 60);
    }

    //Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing test result</h2>"+
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + "seconds</p>"+
    "<p>Words Per Minute (WPM) : " + wpm + "</p>";

    //reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}