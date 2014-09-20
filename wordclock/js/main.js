/*
* Boop
*/
var wordClock = {
    init: function() {

        switch (getQueryString('type')) {
            case 'round':
                $('.arc-seconds').lettering('seconds');
                $('.arc-minutes').lettering('minutes');
                $('.arc-hours').lettering('hours');
                wordClockRound.init();
                $('#pagestyle').attr('href', 'css/roundclock.css');
                break;
            case 'line':
                $('.arc-seconds').lettering('secondsBR');
                $('.arc-minutes').lettering('minutesBR');
                $('.arc-hours').lettering('hoursBR');
                wordClockLine.init();
                $('#pagestyle').attr('href', 'css/lineclock.css');
                break;
            case 'square':
                $('.arc-seconds').lettering('seconds');
                $('.arc-minutes').lettering('minutes');
                $('.arc-hours').lettering('hours');
                wordClockBlock.init();
                $('#pagestyle').attr('href', 'css/blockclock.css');
                break;
            default:
                $('.arc-seconds').lettering('seconds');
                $('.arc-minutes').lettering('minutes');
                $('.arc-hours').lettering('hours');
                wordClockRound.init();
                $('#pagestyle').attr('href', 'css/roundclock.css');
                break;
        }
    }
} 

getQueryString = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}