const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    console.log(event.code);
    if(event.code === 'Space') {
        setRandomColorCols();
    }    
});

document.addEventListener('click', (event) => {
    event.preventDefault();
    const path = event.path;
    let isLock = false;
    let node;
    path.forEach((item) => {
        if(item?.dataset?.type === 'lock' && !isLock) {
            isLock = true;
            node = item.tagName.toLowerCase() === 'svg' ? item : item.children[0];
        }        
    })
    node?.classList.toggle('fa-lock-open');
    node?.classList.toggle('fa-lock');
    
    if(event.target.dataset?.type === 'copy') {
        copyColorText(event.target.innerText);
    }
})

function setRandomColorCols(isInitial) {
    const colors = isInitial ? getColorsFromHash() : [];

    cols.forEach((col, index) => {
        const color = isInitial ? (colors[index] ?? chroma.random()) : chroma.random();
        const text = col.querySelector('h2');
        const btn = col.querySelector('button');

        const isLocked = col.querySelector('button').children[0].classList.contains('fa-lock');
        if(isLocked) {
            colors.push(text.innerHTML);
            return;
        }

        if(!isInitial) colors.push(color);
        text.innerText = color;
        col.style.background = color;
            
        setTextColor(text, color, btn);
    })

    updateColorHash(colors);
}

function setTextColor(text, color, btn) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
    btn.style.color = luminance > 0.5 ? 'black' : 'white';
}

function copyColorText(text) {
    return navigator.clipboard.writeText(text);
}

function updateColorHash(colors = []) {
    document.location.hash = colors.map(col => col.toString().replace('#', '')).join('-');
}

function getColorsFromHash() {
    const hash = document.location.hash;
    if(hash.length > 1) {
        return hash.replace('#', '').split('-').map((color) => '#' + color);
    }
    return [];
}

setRandomColorCols(true);