window.onload = function() {

    "use strict";

    var bigBtn = document.getElementById("docBig");
    bigBtn.onclick = function() { //anonymouse function 
        setInterval(docorateBig, 200);
    };

    function docorateBig() {
        var textArea = document.getElementById("orginalText");
        var style = window.getComputedStyle(textArea);
        var fontSize = style.getPropertyValue('font-size');
        var fontBigger = parseInt(fontSize) + 2; //updating font periodically 
        document.getElementById("orginalText").style.fontSize = fontBigger.toString() + "px";
    }


    $(document).ready(function() {
        $('input[type="checkbox"]').click(function() {
            if ($(this).prop("checked") === true) {
                document.getElementById("orginalText").className = "bold";
                document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
            } else if ($(this).prop("checked") === false) {
                document.getElementById("orginalText").className = "normalText";
            }
        });
    });
};