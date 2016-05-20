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
var resumeButton = document.getElementById('resume-button')

function updateScroll() {
    var scrollOffset = window.pageYOffset; //store number of pixels the document has scrolled down
    // var backgroundPosition = '50% ' + (scrollOffset * 0.5) + 'px';
    bannerImage.style.backgroundPosition = '50% ' + (scrollOffset * 0.5) + 'px';
    // var transparency = (scrollOffset + 30) * 0.002;
    // var backgroundString = 'rgba(255,0,0,' + transparency + ')';
    // console.log(backgroundString);
    // resumeButton.style.backgroundColor = backgroundString;
}

window.addEventListener('scroll', function () { // on page scroll
    requestAnimationFrame(updateScroll); // call updateScroll() on next available screen paint
}, false);

// var navBarItems = document.getElementsByClassName('hvr-overline-reveal');
// for (var i = 0; i < navBarItems.length; i++) {
//     console.log(navBarItems[i]);
//     navBarItems[i].addEventListener("click", navBarItems[i].blur);
// }