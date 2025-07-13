const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

document.getElementById("play").addEventListener("click", () => document.getElementById("video-player").showModal());
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("video-player").close();
  player.pause();
})
