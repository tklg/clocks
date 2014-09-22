var curS = d.getSeconds();
var curM = d.getMinutes();
var curH = d.getHours();
var winHeight = $(window).height();
var winWidth = $(window).width();

var wordClockLine = {
	init: function() {
		for (var i = 0; i <= 60; i++) { //set initial angles of seconds strings
            var div = '.sec' + (i + 1);
            /*if ((i + 1) == 1) { //check to see if the string is at the 0 (active) position
                var tc = '#0F0';
            } else {*/
                var tc = '#555';
            //}

            $(div).css({
                'color': tc
            })
        };

        for (var i = 0; i <= 60; i++) { //set initial angles of seconds strings
            var div = '.min' + (i + 1);
            /*if ((i + 1) == 1) { //check to see if the string is at the 0 (active) position
                var tc = '#0F0';
            } else {*/
                var tc = '#555';
            //}

            $(div).css({
                'color': tc
            })
        };

        for (var i = 0; i <= 12; i++) { //set initial angles of seconds strings
            var div = '.hou' + (i + 1);
            /*if ((i + 1) == 1) { //check to see if the string is at the 0 (active) position
                var tc = '#0F0';
            } else {*/
                var tc = '#555';
            //}

            $(div).css({
                'color': tc
            })
        };

        wordClockLine.initActives('sec');
        wordClockLine.initActives('min');
        wordClockLine.initActives('hou');

        //based on coords on y-axis in viewport, set transparency of text (middle = 0%trans, edges = 100%)
	},

    initActives: function(col) {
        
        console.log(winHeight / 2);

        if (col == 'sec' || col == 'min') {

            for (i = 1; i <= 60; i++) {
                var scrollTop = $(window).scrollTop();
                var elementOffset = $('.' + col + i).offset().top;
                var distance = (elementOffset - scrollTop);
                console.log(distance);
                console.log('.' + col + i);
                //$('.' + col + i).
            }

        } else {

            for (i = 1; i <= 12; i++) {

            }

        }
    }
}