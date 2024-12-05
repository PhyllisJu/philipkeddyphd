function delayAction(callback, delay) {
    setTimeout(callback, delay);
}

window.addEventListener("resize", () => {
    console.log("Resize event triggered");
    const width = window.innerWidth;
    console.log(`Current width: ${width}px`);
    if (width >= 1100) {
        document.querySelector('main').classList.remove('hidden');
        document.querySelector('.navigation-menu').classList.remove('hidden');
        document.querySelector('.navigation-menu').classList.remove('active');
    } else {
        document.querySelector('.navigation-menu').classList.add('hidden');
    }
});

document.getElementById('hamburger-menu-icon').addEventListener('click', function() {
    document.querySelector('.navigation-menu').classList.remove('hidden');
    document.querySelector('.navigation-menu').classList.add('active');
    delayAction(() => {
        document.querySelector('main').classList.add('hidden');
    }, 300);
});

document.getElementById('close-menu-icon').addEventListener('click', function() {
    document.querySelector('main').classList.remove('hidden');
    document.querySelector('.navigation-menu').classList.remove('active');
});