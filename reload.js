/*$(document).ready(function() { /// Wait till page is loaded
    setInterval(timingLoad, 30000);
    function timingLoad() {
    $('#img-container').load('#img-container', function() {
    console.log("The image div has reloaded.")
    });
    }
    });*/
$(document).ready(function(){
    setInterval(function(){
        $(".mosaic").attr("src", "https://sjabr.sharepoint.com/sites/GalaMosaic/Shared%20Documents/Mosaic-Master.jpg"+new Date().getTime());
    },60000);
})