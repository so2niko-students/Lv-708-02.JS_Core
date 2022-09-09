const DOM = {
    inputs : {
        login : document.querySelector('.in-login'),
        password : document.querySelector('.in-password'),
        email : document.querySelector('.in-email'),
    },
    info : {
        login : document.querySelector('.login-info'),
        password : document.querySelector('.pass-info'),
        email : document.querySelector('.email-info'),
    },
    values : {
        login : '',
        password : '',
        email : ''
    }
};


DOM.inputs.login.addEventListener('blur', (ev) => {
    const infoMessage = `Login must contain at least 3 symbols`;

    const val = ev.target.value.trim();
    const isInValidLen = val.length < 3;

    if(isInValidLen){
        DOM.info.login.textContent = infoMessage;
        return;
    }

    DOM.info.login.textContent = '';
});

const isControlKeys = (ev) => {
    const controlKeysNames = ['Control', 'Alt', 'Shift', 'Tab', 'CapsLock', 'Meta', 'ContextMenu', 'Backspace'];
    return controlKeysNames.includes(ev.key);
}

const checkAndShowErrorEmail = (ev) => {
    if(isControlKeys(ev)) return;
    const rightLetters = 'qwertyuiopasdfghjklzxcvbnm.@1234567890+-_';
    const infoMessage = `email address must containt these symbols: ${rightLetters}`;
    const k = ev.key;
    const isInvalidKey = !rightLetters.includes(k);

    if(isInvalidKey){
        DOM.info.email.textContent = infoMessage;
        return;
    } 
}

const checkAndRemoveErrorKeyOnEmail = (ev) => {
    if(isControlKeys(ev)) return;
    const rightLetters = 'qwertyuiopasdfghjklzxcvbnm.@1234567890+-_';
    const infoMessage = `email address must containt these symbols: ${rightLetters}`;
    const k = ev.key;
    const isInvalidKey = !rightLetters.includes(k);

    if(isInvalidKey){
        DOM.info.email.textContent = infoMessage;
        ev.preventDefault();
        return;
    } 

    DOM.info.email.textContent = '';
}

// DOM.inputs.email.addEventListener('keydown', checkAndShowErrorEmail);
DOM.inputs.email.addEventListener('keydown', checkAndRemoveErrorKeyOnEmail);

Object.entries(DOM.inputs).forEach(([key, element]) => {
    element.addEventListener('input', () => {
        DOM.values[key] = element.value;
        
        const dataInStr = JSON.stringify(DOM.values);
        console.log(dataInStr);
        localStorage.setItem('inputs', dataInStr);
    });    
});

(() => {
    const dataInStr = localStorage.getItem('inputs');
    if(dataInStr){
        const data = JSON.parse(dataInStr);
        Object.entries(data).forEach(([key, element]) => {
            DOM.inputs[key].value = element;
        });
    }
})();