var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var offset = 0;

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // gradient background
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "rgb(200, 255, 251)");
    gradient.addColorStop(1, "rgb(203, 255, 201)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // first wave
    ctx.beginPath();
    ctx.moveTo(0, 50);
    for (let i = 0; i <= 1000; i++) {
        let y = Math.sin((i + offset) * 4 * Math.PI / 180) * 50 + 50;
        ctx.lineTo(i, y);
    }
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    // create a second wave
    ctx.beginPath();
    ctx.moveTo(0, 55);
    for (let i = 0; i <= 1000; i++) {
        let y = Math.sin((i + offset) * 4 * Math.PI / 180) * 50 + 55;
        ctx.lineTo(i, y);
    }
    ctx.strokeStyle = 'lightblue';
    ctx.stroke();

    // speed of wave
    offset += 1;
    requestAnimationFrame(drawWave);
}

drawWave();
