function isValidWalk(walk) {
    if (walk.length !== 10) return false;

    let [x, y] = [0, 0];

    const walking = {
        "n": () => y++,
        "s": () => y--,
        "e": () => x++,
        "w": () => x--
    };

    walk.forEach(direction => {
        walking[direction]();
    });

    return x === y && x === 0;
}

