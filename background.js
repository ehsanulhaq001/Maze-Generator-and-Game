setBackground = () => { // Checked background full screen
    back = document.querySelector("#background");
    back.width = Math.max(document.body.scrollWidth, window.innerWidth);
    back.height = Math.max(document.body.scrollHeight, window.innerHeight);
    backctx = back.getContext("2d");

    backctx.beginPath();

    backctx.moveTo(0, back.height * 1 / 6);
    backctx.lineTo(back.width, back.height * 1 / 6);
    backctx.moveTo(0, back.height * 2 / 6);
    backctx.lineTo(back.width, back.height * 2 / 6);
    backctx.moveTo(0, back.height * 3 / 6);
    backctx.lineTo(back.width, back.height * 3 / 6);
    backctx.moveTo(0, back.height * 4 / 6);
    backctx.lineTo(back.width, back.height * 4 / 6);
    backctx.moveTo(0, back.height * 5 / 6);
    backctx.lineTo(back.width, back.height * 5 / 6);

    backctx.moveTo(back.width * 1 / 6, 0);
    backctx.lineTo(back.width * 1 / 6, back.height);
    backctx.moveTo(back.width * 2 / 6, 0);
    backctx.lineTo(back.width * 2 / 6, back.height);
    backctx.moveTo(back.width * 3 / 6, 0);
    backctx.lineTo(back.width * 3 / 6, back.height);
    backctx.moveTo(back.width * 4 / 6, 0);
    backctx.lineTo(back.width * 4 / 6, back.height);
    backctx.moveTo(back.width * 5 / 6, 0);
    backctx.lineTo(back.width * 5 / 6, back.height);

    backctx.strokeStyle = "rgb(20, 90,90)";

    backctx.stroke();
    backctx.beginPath();

    backctx.moveTo(0, back.height * 1 / 12);
    backctx.lineTo(back.width, back.height * 1 / 12);
    backctx.moveTo(0, back.height * 3 / 12);
    backctx.lineTo(back.width, back.height * 3 / 12);
    backctx.moveTo(0, back.height * 5 / 12);
    backctx.lineTo(back.width, back.height * 5 / 12);
    backctx.moveTo(0, back.height * 7 / 12);
    backctx.lineTo(back.width, back.height * 7 / 12);
    backctx.moveTo(0, back.height * 9 / 12);
    backctx.lineTo(back.width, back.height * 9 / 12);
    backctx.moveTo(0, back.height * 11 / 12);
    backctx.lineTo(back.width, back.height * 11 / 12);

    backctx.moveTo(back.width * 1 / 12, 0);
    backctx.lineTo(back.width * 1 / 12, back.height);
    backctx.moveTo(back.width * 3 / 12, 0);
    backctx.lineTo(back.width * 3 / 12, back.height);
    backctx.moveTo(back.width * 5 / 12, 0);
    backctx.lineTo(back.width * 5 / 12, back.height);
    backctx.moveTo(back.width * 7 / 12, 0);
    backctx.lineTo(back.width * 7 / 12, back.height);
    backctx.moveTo(back.width * 9 / 12, 0);
    backctx.lineTo(back.width * 9 / 12, back.height);
    backctx.moveTo(back.width * 11 / 12, 0);
    backctx.lineTo(back.width * 11 / 12, back.height);

    backctx.strokeStyle = "rgb(10, 120,120)";

    backctx.stroke();
}