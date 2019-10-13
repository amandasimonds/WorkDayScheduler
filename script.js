
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
        var eventDiv = $( `<div class='col-8'><input type='text' id='event-input' data-value = ' ${timeStamp[i]} '></div>`);

        makeEventButton.text("Add Event");
        $("#event-input").attr("time", timeStamp[i]);

        //add styling to divs
        $(timeDiv).addClass("time-block");
        $(eventDiv).addClass("textarea");
        $(makeEventButton).addClass("saveBtn");

        //append divs
        $(".row").append(timeDiv);
        $(".row").append(eventDiv);
        $(".row").append(makeEventButton);
        

        console.log("making buttons");
        console.log(timeStamp[i]);

        //save button listener for input to add to local storage
        $("#event-button").on("click", function(buttonTime) {
            event.preventDefault();
            var buttonTime = $(".event-button").attr("value")
            //grab the text from the input box
            var eventInput = $("#event-input").val();
            //store text in local storage
            var i = 0;
            localStorage.setItem(i = timeStamp[i], eventInput);
            console.log("you tryna add an event!");
            $(eventDiv).append(localStorage.getItem(eventInput));
        });

        // $("#event-button").on("click", function(buttonTime) {
        //     event.preventDefault();
        //     var buttonTime = $(".event-button").attr("value")
        //     //grab the text from the input box
        //     var eventInput = $("#event-input").val();
            
        //     console.log("you tryna add an event again!");
        // });
    }

    
  
    //if else statement for past, present and future (< = > moment)

})



    































