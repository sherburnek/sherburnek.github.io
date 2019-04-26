$(document).ready(function() { /// Wait till page is loaded
    setInterval(timingLoad, 30000);
    function timingLoad() {
    $('.mosaic').load('index.html .mosaic', function() {
    console.log("The image has reloaded.")
    });
    }
    });