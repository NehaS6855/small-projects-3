window.onload = function() {
    var hours=27;
    var minute = 45;
    var sec = 60;
    setInterval(function() {
      document.getElementById("timer").innerHTML = hours + ":" + minute + ":" + sec;
      sec--;
  
      if (sec == 0) {
        minute--;
        sec = 60;
  
        if (minute == 0) {
          minute = 9;

        if(hours==0){
            hours=28;
        }
        }
      }
    }, 1000);
  }