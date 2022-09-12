export default function move(top, left){
    const move = [-1, 0, 1];
    const t = (top + move[random(0, 3)]) % 100;
    const l = (left + move[random(0, 3)]) % 100;
    top = t < 0 ? 0 : t;
    left = l < 0 ? 0 : l;

    return [top, left];
}

function random(from = 0, to = 10){
    return Math.floor(Math.random() * (to - from) + from);
}