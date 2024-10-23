export function build(n) {
    let body = document.getElementsByTagName("body")[0];
    let bricks = 1;
    let interval = setInterval(() => {
        let brick = document.createElement("div");
        brick.setAttribute("id", "brick-" + bricks);
        bricks % 3 === 2 ? (brick.dataset.foundation = true) : null;
        body.appendChild(brick);
        bricks++;
        if (bricks > n) {
            clearInterval(interval);
        }
    }, 100);
}

/* function repair */
export function repair(...ids) {
    ids.forEach((id) => {
        let brick = document.getElementById(id);
        brick.getAttribute("foundation")
            ? (brick.dataset.repaired = "in progress")
            : (brick.dataset.repaired = true);
    });
}

/* function destroy that triggres destruction and removes the current last brick in the tower */
 export  function destroy() {
    let bricks = document.getElementsByTagName("div");
    bricks[bricks.length - 1].remove();
}