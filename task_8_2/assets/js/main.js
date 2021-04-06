
let canvas = document.querySelector('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let ctx = canvas.getContext('2d');
ctx.lineWidth = 4;
ctx.strokeStyle = 'blue';
let sx = 0;
let sy = 0;
let isPainting = false;

canvas.addEventListener('mousedown', function (e) {
    sx = e.offsetX;
    sy = e.offsetY;
    isPainting = true;
})
canvas.addEventListener('mouseup', function (e) {
    isPainting = false;
})
canvas.addEventListener('mouseleave', function (e) {
    isPainting = false;
})
canvas.addEventListener('mousemove', function (e) {
    if (isPainting) {
        let x = e.offsetX;
        let y = e.offsetY;
        // let sx = e.offsetX - e.movementX;
        // let sy = e.offsetY - e.movementY;
        ctx.moveTo(sx, sy);
        ctx.lineTo(x, y);
        ctx.stroke();
        sx = x;
        sy = y;
    }
})


