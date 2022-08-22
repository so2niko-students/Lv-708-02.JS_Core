const SETTINGS = {
    timeTick : 1000,
    PACMAN : document.querySelector('#pacman'),
    GAME : document.querySelector('.game'),
    step : 20,
    POSITION : {
        left : 0,
        top : 0,
        direction : 'RIGHT'
    },
    SIZES : {
        width : document.body.clientWidth,
        height : document.body.clientHeight
    },
    time : 0,
    foodInterval : 5
};

function r(from = 0, to = 100){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function move(){
    if(SETTINGS.POSITION.direction === 'RIGHT'){
        SETTINGS.POSITION.left = (SETTINGS.POSITION.left + SETTINGS.step) % SETTINGS.SIZES.width;

        SETTINGS.PACMAN.style.left = `${ SETTINGS.POSITION.left }px`;
        SETTINGS.PACMAN.style.transform = 'rotate(0)';
        return;
    }

    if(SETTINGS.POSITION.direction === 'LEFT'){
        const tempPos = SETTINGS.POSITION.left - SETTINGS.step;
        SETTINGS.POSITION.left = tempPos < 0 ? SETTINGS.SIZES.width : tempPos;

        SETTINGS.PACMAN.style.left = `${ SETTINGS.POSITION.left }px`;
        SETTINGS.PACMAN.style.transform = 'rotate(-180deg)';        
        return;
    }

    if(SETTINGS.POSITION.direction === 'UP'){
        const tempPos = SETTINGS.POSITION.top - SETTINGS.step;
        SETTINGS.POSITION.top = tempPos < 0 ? SETTINGS.SIZES.height : tempPos;
        
        SETTINGS.PACMAN.style.top = `${ SETTINGS.POSITION.top }px`;
        SETTINGS.PACMAN.style.transform = 'rotate(-90deg)';    
        return;
    }

    if(SETTINGS.POSITION.direction === 'DOWN'){
        SETTINGS.POSITION.top = (SETTINGS.POSITION.top + SETTINGS.step) % SETTINGS.SIZES.height;
        SETTINGS.PACMAN.style.top = `${ SETTINGS.POSITION.top }px`;
        SETTINGS.PACMAN.style.transform = 'rotate(90deg)';    
        return;
    }


}

function generateFood(){
    if(SETTINGS.time % SETTINGS.foodInterval === 0){
        const t = Math.floor(r(0, SETTINGS.SIZES.height) / 20) * 20;
        const l = Math.floor(r(0, SETTINGS.SIZES.width) / 20) * 20;
        const food = `<div style="top: ${t}px; left : ${l}px" class="food"></div>`;
        SETTINGS.GAME.insertAdjacentHTML('beforeend', food);
    }
}

function tick(){
    SETTINGS.time++;
    move();
    generateFood()
}

setInterval(tick, SETTINGS.timeTick);

function onKeyPress(ev){
    const controls = {
        'KeyW' : 'UP', 
        'KeyA' : 'LEFT', 
        'KeyS' : 'DOWN', 
        'KeyD' : 'RIGHT'
    };
    const controlesKeys = Object.keys(controls);

    const code = ev.code;
    if(controlesKeys.includes(code)){
        console.log(controls[code]);
        SETTINGS.POSITION.direction = controls[code];
    }
}

document.body.addEventListener('keypress', onKeyPress);