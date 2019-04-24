$(document).ready(function() { /// Wait till page is loaded
    setInterval(timingLoad, 30000);
    function timingLoad() {
    $('#img-container').load('index.html #img-container', function() {
    /// can add another function here
    });
    }
    }); //// End of Wait till page is loaded