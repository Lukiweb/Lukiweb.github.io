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
function general(){
    window.location.assign('./general')
}
function news(){
    window.location.assign('./news')
}
// header buttons
function backbtn(){
    history.back()
}
function websiteinfobtn(){
    window.location.assign('./website-info')
}


// links
function marios271redirect(){
    window.location.assign('https://marios271.github.io/')
}
