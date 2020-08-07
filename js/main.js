var instance = new vidbg(".video", {
  mp4: "./../video/world.mp4", // URL or relative path to MP4 video
  webm: "./../video/world.webm", // URL or relative path to webm video
  poster: "./../video/poster.jpg", // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});

var rellax = new Rellax(".rocket");
if (document.body.clientWidth < 576) {
  rellax.destroy();
}
function reportWindowSize() {
  //console.log(window.innerWidth);
  if (window.innerWidth < 576) {
    rellax.destroy();
  } else if (window.innerWidth >= 576) {
    rellax.refresh();
  }
}

window.onresize = reportWindowSize;

AOS.init();
