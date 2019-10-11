$("#colorChange").on('click', function () {
    $("#box-1").css("background-color", "green");
    $("#box-1").css("color", "yellow");
    $("#box-1").css({
      "width": "40%",
      "height": "400px"
    });
  
    var content = $('<p>');
    content.text('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate aperiam totam quam quisquam unde esse excepturi reiciendis similique.')
  
    $("#box-1").append(content)
  
    var userInput = $("#nameInput").val().trim();
    $("#nameInput").val('')
    localStorage.setItem('userName', userInput);
  })
  
  $("#appendStorage").on('click', function () {
    $("#box-1").append(localStorage.getItem('userName'))
  })
  
  $("#emptyDiv").on('click', function () {
    $("#box-1").empty()
  })
  
  $("#createButtons").on('click', function () {
    for (var i = 0; i < 5; i++) {
      var newButton = $('<button>');
      newButton.addClass('newButton')
      newButton.text('Check out my attribute');
      newButton.attr('randomThing', i)
      $("#box-1").append(newButton)
    }
  })
  
  $(document).on('click', ".newButton", function () {
    alert($(this).attr("randomThing"))
  })
  