let w;
let cols, rows;
let grid;
let current;
let next;
let stack;
let end;
let max;
let c;
let r;
let minSteps;
let stepsTaken;

window.onload = function() {
    start();
}

start = () => {
    w = 30;
    max = 0;
    c = r = 0;
    setup();
    let speed = document.querySelector("#speed").value;
    cols = document.querySelector("#cols").value;
    rows = document.querySelector("#rows").value;
    run = setInterval(draw, 1000 / speed);
    minSteps = stepsTaken = 0;
    document.querySelector("#outputData").style.display = "none";
}

index = (i, j) => {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i * rows + j;
}

setup = () => {
    cols = document.querySelector("#cols").value;
    rows = document.querySelector("#rows").value;
    document.querySelector("#colsShow").innerHTML = cols;
    document.querySelector("#rowsShow").innerHTML = rows;

    cnv = document.querySelector("#canvas");
    cnv.width = cols * w;
    cnv.height = rows * w;
    while (cnv.width > window.innerWidth - 100 || cnv.height > window.innerHeight - 100) {
        w *= 2 / 3;
        cnv.width = cols * w;
        cnv.height = rows * w;
    }

    cnv.style.backgroundColor = "#2f3640";
    ctx = cnv.getContext("2d");
    stack = new Array("Extra");
    grid = new Array();
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    current = grid[0];

    setBackground();
}

draw = () => {
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    current.visited = true;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[index(i, j)].show();
        }
    }
    current.highlight();
    next = current.randomUnvisitedNeighbour();

    if (next) {
        next.visited = true;

        stack.push(current);

        removeWalls(current, next);

        current = next;

        if (stack.length > max) {
            max = stack.length;
            end = stack[max - 1];
            minSteps++;
            console.log("stack.length == ", stack.length, "minSteps ==", minSteps, "i, j ==", current.i, current.j);
            if (stack.length > minSteps) minSteps = stack.length;
        }
    } else if (stack.length > 0) {
        current = stack.pop();
    }

    if (speed != document.querySelector("#speed").value) {
        speed = document.querySelector("#speed").value;
        clearInterval(run);
        run = setInterval(draw, 1000 / speed);
    }
    if (cols != document.querySelector("#cols").value || rows != document.querySelector("#rows").value) {
        cols = document.querySelector("#cols").value;
        rows = document.querySelector("#rows").value
        clearInterval(run);
        stack = [];

        document.querySelector("#colsShow").innerHTML = cols;
        document.querySelector("#rowsShow").innerHTML = rows;

        start();
    }
    //start the game
    if (stack.length == 0) {
        clearInterval(run);
        ctx.beginPath();
        ctx.rect(end.i * w + ctx.lineWidth, end.j * w + ctx.lineWidth, w - 2 * ctx.lineWidth, w - 2 * ctx.lineWidth);
        ctx.fillStyle = "red";
        ctx.fill();
        document.querySelector("#minSteps").innerHTML = minSteps - 3;
        document.querySelector("#outputData").style.display = "block";
        play(c, r);
    }
}

removeWalls = (a, b) => {
    let x = a.i - b.i;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    let y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}