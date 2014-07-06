var curS = d.getSeconds();
var curM = d.getMinutes();
var curH = d.getHours();

var wordClockLine = {
	init: function() {
		for (var i = 0; i <= 60; i++) { //set initial angles of seconds strings
            var div = '.sec' + (i + 1);
            if ((i + 1) == 1) { //check to see if the string is at the 0 (active) position
                var tc = '#0F0';
            } else {
                var tc = '#555';
            }

            $(div).css({
                'color': tc
            })
        };

        for (var i = 0; i <= 60; i++) { //set initial angles of seconds strings
            var div = '.min' + (i + 1);
            if ((i + 1) == 1) { //check to see if the string is at the 0 (active) position
                var tc = '#0F0';
            } else {
                var tc = '#555';
            }

            $(div).css({
                'color': tc
            })
        };

        for (var i = 0; i <= 12; i++) { //set initial angles of seconds strings
            var div = '.hou' + (i + 1);
            if ((i + 1) == 1) { //check to see if the string is at the 0 (active) position
                var tc = '#0F0';
            } else {
                var tc = '#555';
            }

            $(div).css({
                'color': tc
            })
        };

        //based on coords on y-axis in viewport, set transparency of text (middle = 0%trans, edges = 100%)
	},

	mv: function() {

	}
}