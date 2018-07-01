// Input number between 1-20 only for better experience on mobile devices.
$(function () {
    $("input").keydown(function (){
      $(this).data("old",$(this).val());
    });
    $("input").keyup(function (){
        if (parseInt($(this).val())<=20 && parseInt ($(this).val())>=0);
        else
        $(this).val($(this).data("old"));
    });

});
//Javascript code used to create a table for pixel art.

$('#sizePicker').submit(function makeGrid(event) {  // selection of DOM element "form" for "submit" event.
  $('table tr').remove();                          // IMPORTANT ! Clears previously created grid. Everytime a new value is added for grid height and grid width a new table should appear.
var rows=$('#input_height').val();                 // Grid height is equal to number of rows.
var cells=$('#input_width').val();                 // Grid width is equal to number of columns.
  for (var i=1;i<=rows;i++) {
    $('table').append("<tr></tr>");
    for (var j=1;j<=cells;j++) {
      $( 'tr:last').append("<td></td>");         //IMPORTANT ! tr: last makes sure that the cells are added only to the last created table row and not for all.
      $('td').attr('class','pixel');
    }
  }
  event.preventDefault();                       //IMPORTANT ! avoids the page to be refreshed after clicking on submit button and retains the table/grid.
});

//Javascript code used to select and apply color to the cell of the canvas.
$('#pixel_canvas').on('click','.pixel',function(){  //event delegation - checks for any changes in table with id pixel_canvas and makes changes to element with class .pixel
  var pen=$('#colorPicker').val();
  $(this).css('background-color',pen);
});
// Toggle the grid after creating the pixel art..Take a screenshot/use snipping tool...
$('#toggleBtn').click('.pixel_canvas',function (){
    $('td').toggleClass('grid_Toggle');
});
