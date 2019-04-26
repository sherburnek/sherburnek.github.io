$(document).ready(function() { /// Wait till page is loaded
    setInterval(timingLoad, 30000);
    function timingLoad() {
    $('#img-container').load('#img-container', function() {
    console.log("The image div has reloaded.")
    });
    }
    });