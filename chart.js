// data goes here
var trace1 = {
    x: [2000, 2005, 2010, 2015, 2020],
    y: [1, 3, 9, 27, 81],
    type: 'scatter',
    name: 'Regular Computer'
};

var trace2 = {
    x: [2000, 2005, 2010, 2015, 2020],
    y: [1, 4, 16, 64, 256],
    type: 'scatter',
    name: 'Quantum Computer'
};

// graphing data
var data = [trace1, trace2];
var layout = {
    title: 'Computing Power Comparison',
    xaxis: {
        title: 'Time'
    },
    yaxis: {
        title: 'Computing Power'
    }
};

Plotly.newPlot('chart', data, layout);