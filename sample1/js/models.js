var kpi = {
  update: function () {
    
  }
};

var chart = {
  init: function ( el ) {
    var ctx = $( el )[0].getContext("2d");

    this.data = {
      labels: ["", "", "", "", "", "", ""],
      datasets: [
        {
          fillColor: "rgba(220,220,220,0.5)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          fillColor: "rgba(151,187,205,0.5)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    return new Chart( ctx ).Bar( this.data, {} );
  },
  update: function () {
    
  }
};

var table = {
  update: function () {
    
  }
};

var date = {
  update: function () {
    
  }
};