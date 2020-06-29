play = (c, r) => {
    document.addEventListener("keydown", keyPush);

    ctx.beginPath();
    ctx.rect(c * w + ctx.lineWidth, r * w + ctx.lineWidth, w - 2 * ctx.lineWidth, w - 2 * ctx.lineWidth);
    ctx.fillStyle = "blue";
    ctx.fill();

    if (c == end.i && r == end.j) {
        window.alert("You Win");
        setup();
        draw();
    }
}


keyPush = (e) => {
    console.log("working")
    switch (e.keyCode) {
        case 37:
            if (c > 0 && !grid[index(c - 1, r)].walls[1]) {
                ctx.beginPath();
                ctx.rect(c * w + ctx.lineWidth, r * w + ctx.lineWidth, w - 2 * ctx.lineWidth, w - 2 * ctx.lineWidth);
                ctx.fillStyle = "rgb(21, 34, 34)"
                ctx.fill();
                c--;
                console.log("left")
                play(c, r);
            }
            break;
        case 38:
            if (r > 0 && !grid[index(c, r - 1)].walls[2]) {
                ctx.beginPath();
                ctx.rect(c * w + ctx.lineWidth, r * w + ctx.lineWidth, w - 2 * ctx.lineWidth, w - 2 * ctx.lineWidth);
                ctx.fillStyle = "rgb(21, 34, 34)"
                ctx.fill();
                r--;
                console.log("up")
                play(c, r);
            }
            break;
        case 39:
            if (c < cols - 1 && !grid[index(c + 1, r)].walls[3]) {
                ctx.beginPath();
                ctx.rect(c * w + ctx.lineWidth, r * w + ctx.lineWidth, w - 2 * ctx.lineWidth, w - 2 * ctx.lineWidth);
                ctx.fillStyle = "rgb(21, 34, 34)"
                ctx.fill();
                c++;
                console.log("right")
                play(c, r);
            }
            break;
        case 40:
            if (r < rows - 1 && !grid[index(c, r + 1)].walls[0]) {
                ctx.beginPath();
                ctx.rect(c * w + ctx.lineWidth, r * w + ctx.lineWidth, w - 2 * ctx.lineWidth, w - 2 * ctx.lineWidth);
                ctx.fillStyle = "rgb(21, 34, 34)"
                ctx.fill();
                r++;
                console.log("down")
                play(c, r);
            }
            break;
    }
}