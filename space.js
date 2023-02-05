// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// add a piece of text at position (120, 80)
add([
    text("Hello World"),
    pos(120, 80),
]);
 