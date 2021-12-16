import Player from '@vimeo/player'
import throttle from "lodash.throttle"
const PLAYER_KEY = "videoplayer-current-time"
const iframeEl = document.querySelector('iframe');
 const player = new Player(iframeEl);

populatePlayer()
const onPlay = function (e) {
   const seconds = e.seconds 
   console.log(seconds)  
    localStorage.setItem(PLAYER_KEY, seconds)
     
  };
function populatePlayer() {
    const savedPlayer = localStorage.getItem(PLAYER_KEY)
    if (savedPlayer) {
        player.setCurrentTime(savedPlayer)
        
    }
     
};
player.on('timeupdate',throttle(onPlay,1000))