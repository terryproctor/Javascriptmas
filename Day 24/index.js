const player = document.getElementById("player")

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  let player_src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  let player = document.getElementById('player');
  player.src = player_src;
}