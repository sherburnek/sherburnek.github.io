$(document).ready(function() { /// Wait till page is loaded
    setInterval(timingLoad, 30000);
    function timingLoad() {
    $('#img-container').load('index.html #img-container', function() {
    console.log("The image div reloaded.")
    });
    }
    }); //// End of Wait till page is loaded