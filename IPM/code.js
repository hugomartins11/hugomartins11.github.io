function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);

	var weekday = new Array(7);
	weekday[0] = 'Sun';
	weekday[1] = 'Mon';
	weekday[2] = 'Tue';
	weekday[3] = 'Wed';
	weekday[4] = 'Thu';
	weekday[5] = 'Fri';
	weekday[6] = 'Sat';

	var a = weekday[today.getDay()];

	document.getElementById('time').innerHTML = a + ' ' + h + ':' + m;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	}

	return i;
}

function startDay() {
	var today = new Date();
	var d = today.getDate();

	var month = new Array();
	month[0] = 'Jan';
	month[1] = 'Feb';
	month[2] = 'Mar';
	month[3] = 'Apr';
	month[4] = 'May';
	month[5] = 'Jun';
	month[6] = 'Jul';
	month[7] = 'Aug';
	month[8] = 'Sep';
	month[9] = 'Oct';
	month[10] = 'Nov';
	month[11] = 'Dec';

	var m = month[today.getMonth()];
	document.getElementById('date').innerHTML = d + ' ' + m;
	document.getElementById('date0').innerHTML = d - 1 + ' ' + m;
	document.getElementById('date1').innerHTML = d - 2 + ' ' + m;
	document.getElementById('date2').innerHTML = d - 3 + ' ' + m;
	document.getElementById('date3').innerHTML = d - 4 + ' ' + m;
	document.getElementById('date4').innerHTML = d - 5 + ' ' + m;
	document.getElementById('date5').innerHTML = d - 6 + ' ' + m;
	document.getElementById('date6').innerHTML = d - 7 + ' ' + m;
}

var imagesArray = [ 'drone.gif', 'drone2.gif', 'drone3.gif', 'drone4.gif', 'drone5.gif' ];

function displayImg() {
	var num = Math.floor(Math.random() * (imagesArray.length + 1));
	document.gif_drone.src = '../img/' + imagesArray[num];
}

function getRandomImage(imagesArray, path) {
	var num = Math.floor(Math.random() * imagesArray.length);
	var img = imagesArray[num];
	var imgStr = '<img src="' + path + img + '" alt = "" style = "border-radius: 0" width = "245" height="150">';
	document.write(imgStr);
	document.close();
}

function alerta() {
	var txt;
	var r = confirm("Are you sure?");
	if (r == true) {
	  alert("Picture deleted successfully.");
	}
  }