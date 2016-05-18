// alert("Test");

//Scrolling logic for banner

// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function (f) {
        setTimeout(f, 1000 / 60)
    };

var bannerImage = document.getElementById('main-banner-image');

function scrollBanner() {
    var scrollOffset = window.pageYOffset; //store number of pixels the document has scrolled down
    var backgroundPosition = '50% ' + (scrollOffset * 0.5) + 'px';
    bannerImage.style.backgroundPosition = backgroundPosition;

}

window.addEventListener('scroll', function () { // on page scroll
    requestAnimationFrame(scrollBanner); // call parallaxbubbles() on next available screen paint
}, false);