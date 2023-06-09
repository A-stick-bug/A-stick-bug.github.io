var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 3, 9, 27, 81],
    type: 'scatter',
    name: 'Regular Computer'
};
var trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 4, 16, 64, 256],
    type: 'scatter',
    name: 'Quantum Computer'
};
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