const day_counter = document.getElementById("day_counter");
const hour_counter = document.getElementById("hour_counter");
const minute_counter = document.getElementById("minute_counter");
const second_counter = document.getElementById("second_counter");

const hype = document.getElementById("hype");

const switch2Date = new Date("June 5, 2025 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = switch2Date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    var all_hours = Math.floor(distance / (1000 * 60 * 60));


    day_counter.innerHTML = "0" + days;

    if (hours < 10) {
        hour_counter.innerHTML = "0" + hours;
    }
    else {
        hour_counter.innerHTML = hours;
    }
    
    if (minutes <10) {
        minute_counter.innerHTML = "0" + minutes;
    }
    else {
        minute_counter.innerHTML = minutes;
    }

    if (seconds < 10) {
        second_counter.innerHTML = "0" + seconds;
    }
    else {
        second_counter.innerHTML = seconds;
    }


    if (distance < 0) {
        clearInterval(x);
        hype.innerHTML = "SWITCH 2 IS HERE!!";
        day_counter.innerHTML = "00";
        hour_counter.innerHTML = "00";
        minute_counter.innerHTML = "00";
        second_counter.innerHTML = "00";
    }
    
    hype.innerHTML = "We are less than a week away!"
}, 1000);