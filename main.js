const GALLERY_WRAPPER = document.querySelector('.gallery-wrapper')

const UNSPLASH_URL = 'https://source.unsplash.com/random/'
const ROWS = 10;

for ( let i = 0; i < ROWS * 3; i++) {
    const PICTURE = document.createElement('img');
    PICTURE.src = `${UNSPLASH_URL}${getRandomSize()}`
    GALLERY_WRAPPER.appendChild(PICTURE)
}

function getRandomNum() {
    return Math.floor(Math.random() * 10) + 300
}

function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`
}

console.log(getRandomSize())