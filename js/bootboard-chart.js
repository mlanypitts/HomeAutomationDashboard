// first donut chart
new Chartist.Pie('.ct-chart-one', {
  labels: ['Eco-use', 'Normal:90KWh', 'Comfort-Use', 'Excessive'],
  series: [60, 30, 40, 20]
}, {
  donut: true,
  donutWidth: 60,
  startAngle: 270,
  total: 300,
  showLabel: true
});


// second pie chart
var data = {
  labels: ['Heater1 - 30%', 'Heater2 - 30%', 'LightRoom1 - 10%', 'TV - 15%', 'PC1 - 5%'],
  series: [30, 30, 10, 15, 5]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 5,
    labelOffset: 0,
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 0,
    chartPadding: 5
  }]
];

new Chartist.Pie('.ct-chart-two', data, options, responsiveOptions);

// third bar chart
var data = {
  labels: ['Heating', 'Ventilation', 'Air-Conditioning', 'Lightning', 'PCs', 'Entertainment'],
  series: [
    [5, 1, 1, 6, 5, 6],
    [4, 5, 3, 5, 4, 4]
  ]
};

var options = {
  seriesBarDistance: 15
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 10,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart-three', data, options, responsiveOptions);

// table chart
new Chartist.Line('.ct-chart-table', {
    /*The x-axis lables for the line table*/
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    /*Data points for the line charts*/
    series: [
        [2, 2, 3, 6, 5],
        [1, 3, 4, 5, 6]
    ]
}, {
fullWidth: false,
    chartPadding: {
        right: 40
    }
});