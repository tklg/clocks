var d = new Date();
var angleS, angleM, angleH = 0;
var tA = 1;
var tB = 1;
var tC = 1;
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();

var wordClockRound = {

    init: function() {

        if (h > 12) {
            h -= 12; //12 hour time
        }
		console.log(h+':'+m+':'+s);

		$('#a1').css({
            	'-webkit-transform': 'rotate(' + (s * -6 + 6) + 'deg)',
            	'transform': 'rotate(' + (s * -6 + 6) + 'deg)'
            });
        $('#a2').css({
            	'-webkit-transform': 'rotate(' + (m * -6 + 6) + 'deg)',
            	'transform': 'rotate(' + (m * -6 + 6) + 'deg)'
            });
        $('#a3').css({
            	'-webkit-transform': 'rotate(' + (h * -30 + 30) + 'deg)',
            	'transform': 'rotate(' + (h * -30 + 30) + 'deg)'
            });

        var angle = 0;
        //var angle = this.s * 6;

        for (var i = 0; i <= 60; i++) { //set initial angles of seconds strings
            var div = '.sec' + (i + 1);
            var tc = '#555';

            $(div).css({
                '-webkit-transform': 'rotate(' + angle + 'deg)',
                'transform': 'rotate(' + angle + 'deg)',
                'color': tc
            })
            angle += 6;
        };

        angle = 0; //reset to 0 for the next circle
        //angle = this.m * 6;

        for (var i = 0; i <= 60; i++) { //and for the minute strings
            var div = '.min' + (i + 1);
            var tc = '#555';

            $(div).css({
                '-webkit-transform': 'rotate(' + angle + 'deg)',
                'transform': 'rotate(' + angle + 'deg)',
                'color': tc
            })
            angle += 6;
        };

        angle = 0;
        //angle = this.h * 30;

        for (var i = 0; i <= 12; i++) { //and the hour strings
            var div = '.hou' + (i + 1);
            var tc = '#555';

            $(div).css({
                '-webkit-transform': 'rotate(' + angle + 'deg)',
                'transform': 'rotate(' + angle + 'deg)',
                'color': tc
            })
            angle += 30;
        };

        /*angleS = parseInt(getCurrRotation("a1"));
        angleM = parseInt(getCurrRotation("a2"));
        angleH = parseInt(getCurrRotation("a3"));*/
        angleS = (s * -6 + 6);
        angleM = (m * -6 + 6);
        angleH = (h * -30 + 30);
        tA = s;
        tB = m;
        tC = h;
        colChange('sec');
        colChange('min');
        colChange('hou');

        console.log(angleS, angleM, angleH);

        setInterval(this.inc, 1000);

    },

    inc: function() {

        tA++;
        angleS -= 6;
        angAnimS = angleS - 0.8;
        $('#a1').css({
            	'-webkit-transform': 'rotate(' + angAnimS + 'deg)',
            	'transform': 'rotate(' + angAnimS + 'deg)'
            });
        setTimeout(function() {
        angAnimS += 0.8;
        $('#a1').css({
            	'-webkit-transform': 'rotate(' + angAnimS + 'deg)',
            	'transform': 'rotate(' + angAnimS + 'deg)'
            });
        }, 176);
        colChange('sec');

        if (tA == 60) {
        	console.log("minute");
			angleM -= 6;
        	$('#a2').css({
            	'-webkit-transform': 'rotate(' + angleM + 'deg)',
            	'transform': 'rotate(' + angleM + 'deg)'
            	});
        	tA = 0;
        	colChange('min');
        	tB++;
        }
        if (tB == 60) {
			angleH -= 30;
        	$('#a3').css({
            	'-webkit-transform': 'rotate(' + angleH + 'deg)',
            	'transform': 'rotate(' + angleH + 'deg)'
            	});
        	tB = 0;
        	colChange('hou');
        	tC++;
        }
        if (tC == 12) {
        	tC = 0;
        }
        //stuff to change the angle of the second/seconds and and
        if (tA > 1) {
        	$('#a6').css({
            	'-webkit-transform': 'rotate(6deg)',
            	'transform': 'rotate(6deg)'
            	});
        	$('.second').css('color','#555');
        	$('.seconds').css('color','#0f0');
        } else if (tA == 1) {
        	$('#a6').css({
            	'-webkit-transform': 'rotate(0deg)',
            	'transform': 'rotate(0deg)'
            	});
        	$('#a5').css({
        		'-webkit-transform': 'rotate(0deg)',
            	'transform': 'rotate(0deg)'
        	})
        	$('.second').css('color','#0f0');
        	$('.seconds').css('color','#555');
        	$('.and').css('color','#0f0');
        } else if (tA == 0) {
        	$('#a6').css({
            	'-webkit-transform': 'rotate(3deg)',
            	'transform': 'rotate(3deg)'
            	});
        	$('#a5').css({
        		'-webkit-transform': 'rotate(6deg)',
            	'transform': 'rotate(6deg)'
        	})
        	$('.second').css('color','#555');
        	$('.seconds').css('color','#555');
        	$('.and').css('color','#555');
        }
    }
}

getCurrRotation = function(elid) {

  	var el = document.getElementById(elid);
	var st = window.getComputedStyle(el, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
	         st.getPropertyValue("-moz-transform") ||
	         st.getPropertyValue("-ms-transform") ||
	         st.getPropertyValue("-o-transform") ||
	         st.getPropertyValue("transform") ||
	         "fail...";

	var values = tr.split('(')[1];
	    values = values.split(')')[0];
	    values = values.split(',');
	var a = values[0];
	var b = values[1];
	var c = values[2];
	var d = values[3];

	var scale = Math.sqrt(a*a + b*b);

	var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

	return angle;
}

getActive = function(arc) { //get active number
	if (arc == 'sec') {
		active = angleS / -6;
		if (active > 60) {
			active = active % 60;
		}
		return ['.sec' + (active + 1), '.sec' + active];
	}

	if (arc == 'min') {
		active = angleM / -6;
		if (active > 60) {
			active = active % 60;
		}
		return ['.min' + (active + 1), '.min' + active];
	}

	if (arc == 'hou') {
		active = angleH / -30;
		if (active > 12) {
			active = active % 12;
		}
		return ['.hou' + (active + 1), '.hou' + active];
	}
}

getWidth = function(arc) {
	if (arc == 'sec') {
		activeDiv = getActive(arc);
		strLen = $(activediv[0]).text().length;
	}

	if (arc == 'min') {

	}

	if (arc == 'hou') {

	}
}

colChange = function(arc) { //change color of stuff
    	activeDiv = getActive(arc);

    	if (activeDiv[0] == '.' + arc + '61') { //this fixes problem with it counting to 61
    		$('.' + arc + '60').css('color','#555');
    		$('.' + arc + '1').css('color','#0f0');
    	}
    	if (activeDiv[0] != '.' + arc + '60') { //fixes problem with 'precisely' staying lit
    		$('.' + arc + '60').css('color','#555');
    	}
    	if (activeDiv[0] == '.hou0') { //this fixes problem with hours at 0
    		$('.' + arc + '1').css('color','#555');
    		$('.' + arc + '12').css('color','#0f0');
    	}
    	$(activeDiv[0]).css('color','#0f0');
    	$(activeDiv[1]).css('color','#555');
    }