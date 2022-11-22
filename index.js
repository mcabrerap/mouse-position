const robot = require('robotjs');


let mouse = robot.getMousePos();

console.log("x: " + mouse.x + " y: " + mouse.y);

while (mouse.x !== 0 || mouse.y !== 0) {
    mouse = robot.getMousePos();
    console.log("x: " + mouse.x + " y: " + mouse.y);
}
