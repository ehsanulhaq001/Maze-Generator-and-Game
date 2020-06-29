class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        let x = i * w;
        let y = j * w;
        this.visited = false;
        this.walls = [true, true, true, true];

        this.show = function() {
            ctx.lineWidth = 4;
            if (this.walls[0]) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + w, y);
                ctx.strokeStyle = "rgb(117, 222,0)";
                ctx.stroke();
            }
            if (this.walls[1]) {
                ctx.beginPath();
                ctx.moveTo(x + w, y);
                ctx.lineTo(x + w, y + w);
                ctx.strokeStyle = "rgb(117, 222,0)";
                ctx.stroke();
            }
            if (this.walls[2]) {
                ctx.beginPath();
                ctx.moveTo(x + w, y + w);
                ctx.lineTo(x, y + w);
                ctx.strokeStyle = "rgb(117, 222,0)";
                ctx.stroke();
            }
            if (this.walls[3]) {
                ctx.beginPath();
                ctx.moveTo(x, y + w);
                ctx.lineTo(x, y);
                ctx.strokeStyle = "rgb(117, 222,0)";
                ctx.stroke();
            }
            if (this.visited) {
                ctx.beginPath();
                ctx.rect(x, y, w, w);
                ctx.fillStyle = "rgb(21, 34, 34)";
                ctx.fill();
            }
        };

        this.highlight = function() {
            if (this.visited) {
                ctx.beginPath();
                ctx.rect(x + ctx.lineWidth, y + ctx.lineWidth, w - 2 * ctx.lineWidth, w - 2 * ctx.lineWidth);
                ctx.fillStyle = "rgb(193, 255, 0";
                ctx.fill();
            }
        };

        this.randomUnvisitedNeighbour = function() {
            this.unvisitedNeigbours = [];

            let top = grid[index(i, j - 1)];
            let right = grid[index(i + 1, j)];
            let bottom = grid[index(i, j + 1)];
            let left = grid[index(i - 1, j)];

            if (top && !top.visited) {
                this.unvisitedNeigbours.push(top);
            }
            if (right && !right.visited) {
                this.unvisitedNeigbours.push(right);
            }
            if (bottom && !bottom.visited) {
                this.unvisitedNeigbours.push(bottom);
            }
            if (left && !left.visited) {
                this.unvisitedNeigbours.push(left);
            }

            if (this.unvisitedNeigbours.length > 0) {
                let random = Math.floor(Math.random() * this.unvisitedNeigbours.length);
                return this.unvisitedNeigbours[random];
            } else {
                return undefined;
            }
        };
    }
}