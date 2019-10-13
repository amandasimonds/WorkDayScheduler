
console.log(moment());
console.log("Script is here");


$(document).ready(function() {

    //current date and time
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = m.format()

    console.log(m);
    console.log(currentTime);

    //current date header
    $("#currentDay").text("Today's Date: " + currentDate);

    //timeblocks -----
    //make 9am - 5pm timeslots
    //make an array of timestamps
    var timeStamp = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

    //loop and create divs
    for(var i = 0; i < timeStamp.length; i++){

        var makeEventButton = $("<button id='event-button'>")
        var timeDiv = $("<div class='col-2'><p>" + timeStamp[i] + "</p></div>");
        var eventInputField = $( `<input type='text' id='event-input' data-value = ' ${timeStamp[i]} '>`);
        var eventDiv = $("<div class='col-8'></div>");
        var savedEvents = $("<div>");

        makeEventButton.text("Add Event");
        $("#event-input").attr("time", timeStamp[i]);

        //add styling to divs
        $(timeDiv).addClass("time-block");
        $(eventInputField).addClass("textarea");
        $(eventDiv).addClass("event-div");
        $(makeEventButton).addClass("saveBtn");
        $(savedEvents).addClass("saved-events");

        //append divs
        $(".row").append(timeDiv);
        $(".row").append(eventDiv);
        $(".row").append(makeEventButton);
        $(eventDiv).append(eventInputField);
        $(eventDiv).append(savedEvents);
        

        console.log("making divs");
        console.log(timeStamp[i]);

        };


    //save button listener for input to add to local storage
    $("#event-button").on("click", function(buttonTime) {
        event.preventDefault();
        var buttonTime = $(".event-button").attr("value", timeStamp[i])
        //grab the text from the input box
        var eventInput = $("#event-input").val();
        $("#event-input").val("");
        //store text in local storage
        var i = 0;
        localStorage.setItem(i = timeStamp[i], eventInput);
        console.log("~~~~adding event~~~~");
        
        function renderEvent(){
           $(".saved-events").prepend(eventInput);
           console.log("render this event!!!");
           console.log("event added: " + eventInput);
       }
   
       //render local storage in event div
       $("#event-input").empty();
       renderEvent();
       });
    

    
    

    
  
    //if else statement for past, present and future (< = > moment)

})



    































