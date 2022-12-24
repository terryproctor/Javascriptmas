const player = document.getElementById("player")

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  let player_src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  let player = document.getElementById('player');
  player.src = player_src;
  let playing = document.querySelector(`[onclick="playSong('${id}')"]`);
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++){
    buttons[i].style.backgroundColor = "#BDD59B";
  }
 
  playing.style.backgroundColor = "rgb(250,80,80)";
}