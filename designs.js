var gridTable=$("#pixel_canvas");

// get the modal
var modal = document.getElementById("myModal");

// get the button that opens the modal
var ibtn = document.getElementById("ibutton");

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when the user clicks on the button, open the modal
ibtn.onclick = function() {
    modal.style.display = "block";
}

// when the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//deleting all work function
function clearGrid() {
    gridTable.find("tr","td").remove();
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var  gridWidth=$("#input_width").val();
  var gridHeight=$("#input_height").val();
  for (var x = 0; x < gridHeight; x++){
    gridTable.append('<tr></tr>');
    for (var y = 0; y < gridWidth; y++){
      $("tr").last().append("<td></td>");
    }
  }

  //coloring grid
  $("td").mousedown(function() {
    var color = $("#colorPicker").val();
    $(this).css("background-color", color);
  });

  //delete color with doubleclick
  $( "td" ).dblclick(function() {
  $(this).css("background-color", "#fff")
  });

  //cells on-off
  $("#table-grid").click(function() {
    $("td").toggleClass("grid-borders");
    $("tr").toggleClass("grid-borders");
  });

}
//submit button
$("input[type=submit]").click(function(event){
  event.preventDefault(); //prevent page refresh after submit
  $(".flex").find("img").remove();
  clearGrid();
  makeGrid();
});

//function to convert the color code from rgb format to hexa format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

//picking color from default colors
$(".color").click( function (evt) {
    var pickedColor = $(evt.target).css("background-color");
    var hex = rgb2hex(pickedColor);
    $("#colorPicker").val(hex);
});

//delete all Button
$("#clear").click(function(){
  clearGrid();
  $(".flex").find("img").remove();
});
