// Variables
const diggbsitepasswd = '42diggbisnotsonice69'

// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
  
// Prevent video popout
var video = document.getElementById('bgvid');

video.addEventListener('webkitpresentationmodechanged', function (e) {
  if (document.webkitIsFullScreen || document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  }
});

video.addEventListener('mozfullscreenchange', function (e) {
  if (document.mozFullScreen || document.mozFullScreenElement) {
    document.mozCancelFullScreen();
  }
});

video.addEventListener('fullscreenchange', function (e) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
});

// main buttons
function diggbbtn(){
    window.location.assign('https://diggbfiles.github.io')
}


// header buttons
function backbtn(){
    history.back()
}
function websiteinfobtn(){
    window.location.assign('./website-info.html')
}


// links
function marios271redirect(){
    window.location.assign('https://marios271.github.io/')
}
function bgvidlink(){
    window.location.assign('https://www.youtube.com/watch?v=uQerf7RQqLc')
}