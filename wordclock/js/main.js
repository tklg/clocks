/*
* Boop
*/
var wordClock = {
    init: function() {
        /*colors*/
/*        var colorFontInactive = '"#' + getQueryString('f') + '"';
        var colorFontActive = '"#' + getQueryString('a') + '"';
        var colorBackground = '"#' + getQueryString('b') + '"';
        console.log(colorFontInactive);
        console.log(colorFontActive);
        console.log(colorBackground);*/
        if (getQueryString('type') == 'round') {
            $('.arc-seconds').lettering('seconds');
            $('.arc-minutes').lettering('minutes');
            $('.arc-hours').lettering('hours');
            wordClockRound.init();
            $('#pagestyle').attr('href', 'css/roundclock.css');
        } else if (getQueryString('type') == 'line') {
            $('.arc-seconds').lettering('secondsBR');
            $('.arc-minutes').lettering('minutesBR');
            $('.arc-hours').lettering('hoursBR');
            wordClockLine.init();
            $('#pagestyle').attr('href', 'css/lineclock.css');
        } else if (getQueryString('type') == 'block') {
            $('.arc-seconds').lettering('seconds');
            $('.arc-minutes').lettering('minutes');
            $('.arc-hours').lettering('hours');
            wordClockBlock.init();
            $('#pagestyle').attr('href', 'css/blockclock.css');
        } else {
            $('.arc-seconds').lettering('secondsBR');
            $('.arc-minutes').lettering('minutesBR');
            $('.arc-hours').lettering('hoursBR');
            wordClockLine.init();
            $('#pagestyle').attr('href', 'css/lineclock.css');
        }
    }
} 

getQueryString = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}