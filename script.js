
console.log("Script is here");

$(document).ready(function() {

    //current date and time
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();

    console.log(m);
    console.log(currentTime);
    console.log(currentHour);

    //current date header
    $("#currentDay").text("Today's Date: " + currentDate);

    //timeblocks -----
    //make 9am - 5pm timeslots
    //make an array of timestamps
    var timeStamp = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

    //loop and create divs
    for(var i = 0; i < timeStamp.length; i++){

        var makeEventButton = $(`<button id='event-button' data-value = ' ${hour[i]}'>`)
        var timeDiv = $("<div class='col-2'><p>" + timeStamp[i] + "</p></div>");
        var eventInputField = $( `<input type='text' class='event-input' data-value = ' ${hour[i]} '>`);
        var eventDiv = $(`<div class='col-8' data-value = ' ${hour[i]} '></div>`);
        var savedEvents = $("<div>");

        makeEventButton.text("Add Event");

        //add styling to divs
        $(timeDiv).addClass("time-block");
        $(eventInputField).addClass("textarea");
        $(eventDiv).addClass("event-div");
        $(makeEventButton).addClass("saveBtn");
        $(savedEvents).addClass("saved-events");

        //add data-values for each div
        var hourValue = hour[i];
        // $(".event-input").attr("data-value", timeStamp[i]);
        $(savedEvents).data({ "hour": hourValue});
        $(makeEventButton).data({ "hour": hourValue});
        $(eventDiv).data({"hour": hourValue});

        console.log(timeStamp[i], eventDiv.data());

        //append divs
        $(".row").append(timeDiv);
        $(".row").append(eventDiv);
        $(".row").append(makeEventButton);
        $(eventDiv).append(eventInputField);
        $(eventDiv).append(savedEvents);
        
        };

        //save button listener for input to add to local storage
    $(".saveBtn").on("click", function() {
        // event.preventDefault();
        // var eventTime = $(".event-button").attr();

        //grab the text from the input box
        var eventInput = $(".event-input").val();
        $(".event-input").val("");

        //store text in local storage
        var i = 0;
        localStorage.setItem(i = timeStamp[i], eventInput);
        console.log("~~~~adding event to local storage~~~~");
        // console.log($(".event-button").attr());

        
        //function to get event from local storage and render it on page
        function renderEvent(){
            
        //    $(".saved-events").prepend(eventInput);
           console.log("render this event!!!");
           console.log("event added: " + eventInput);
       }

       //empty the input
       $(".event-input").empty();

       //call the render event function
       renderEvent();

       });
    

      //if else statement for past, present and future (< = > moment)


})



    































