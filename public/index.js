$(document).ready(function() {
    if( ! $('#myCanvas').tagcanvas({
      textColour : '#ffffff',
      outlineThickness : 1,
      maxSpeed : 0.03,
      depth : 0.75
    })) {
      // TagCanvas failed to load
      $('#myCanvasContainer').hide();
    }
    // your other jQuery stuff here...
  });


  $('#myCanvas').tagcanvas({
     depth : 0.75
   },'tagList');