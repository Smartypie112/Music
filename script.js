window.onload = () => {
     let queque = null;     
     let CurrentPlaying = null;
      const profile = document.querySelector(".icon");
  const down = document.querySelector(".others");
down.style.display="none";
    
  profile.addEventListener("click", () => {
      down.style.display="block";
      setTimeout(()=>{
           down.style.transform = "translateY(-1350px)";
    down.style.transition = "transform 0.4s ease";
    document.body.style.height = "100vh"; // ✅ Proper way
      document.body.style.overflow = "scroll";
      },500)
   });
    const cross = document.getElementById("cross");
cross.addEventListener("click",()=>{
    setTimeout(()=>{
    down.style.display="none";
    },500);
    down.style.transform = "translateY(0px)";
    down.style.transition = "transform 1s ease";
    document.body.style.height = "auto"; 
      document.body.style.overflow = "scroll";
});
     const play = Array.from(document.getElementsByClassName("play"));
     const pause = Array.from(document.getElementsByClassName("pause"));
    
     play.forEach((plays ,index)=>{
     plays.addEventListener("click",()=>{
          if (CurrentPlaying) {
     CurrentPlaying.play();
}
     plays.style.display="none";
     pause[index].style.display="block";
})
});
  
     pause.forEach((pauses,index)=>{
     pauses.addEventListener("click",()=>{
          if (CurrentPlaying) {
     CurrentPlaying.pause();
}
     pauses.style.display="none";
     play[index].style.display="block";
})
});
     
const songs = document.querySelectorAll(".song");   
const boxes = document.querySelectorAll(".box");   
const textContents = document.querySelectorAll(".text-content");   
const artists = document.querySelectorAll(".artist");
const flex = document.getElementsByClassName("flex")[0];
const grid = document.getElementsByClassName("grid")[0];
flex.addEventListener("click", () => {
     grid.style.display = "block";
     flex.style.display = "none";

     // First group
     document.getElementsByClassName("songs")[0].classList.remove("Grid");
     document.getElementsByClassName("plus-button")[0].style.minWidth = "20vw";
     songs.forEach(song => {
          song.style.flexDirection = "row";
          song.style.width = "95vw";
     });
     boxes.forEach(box => {
          box.style.minWidth = "55px";
          box.style.minHeight = "55px";
     });
     textContents.forEach(content => {
          content.style.width = "66vw";
     });
     artists.forEach(artist => {
          artist.style.fontSize = "14px";
     });


});

grid.addEventListener("click", () => {
     flex.style.display = "block";
     grid.style.display = "none";

     // First group
     document.getElementsByClassName("songs")[0].classList.add("Grid");
     document.getElementsByClassName("plus-button")[0].style.minWidth = "34vw";
     songs.forEach(song => {
          song.style.flexDirection = "column";
          song.style.width = "45vw";
     });
     boxes.forEach(box => {
          box.style.minWidth = "115px";
          box.style.minHeight = "115px";
     });
     textContents.forEach(content => {
          content.style.width = "36vw";
     });
     artists.forEach(artist => {
          artist.style.fontSize = "12px";
     });
});
     
     const musicplayer = document.querySelector(".player");
  const MusicPlayer = document.querySelector(".player-box");
MusicPlayer.style.display="none";
    
  musicplayer.addEventListener("click", () => {
      MusicPlayer.style.display="flex";
      setTimeout(()=>{
           MusicPlayer.style.transform = "translateY(-750px)  ";
    MusicPlayer.style.transition = "transform 0.4s ease";
    document.body.style.height = "100%"; // ✅ Proper way
      document.body.style.overflow = "hidden";
      },500)
   });
     const downplayer = document.getElementsByClassName("down-arrow")[0];
downplayer.addEventListener("click",()=>{
    setTimeout(()=>{
    MusicPlayer.style.display="none";
    },500);
    MusicPlayer.style.transform = "translateY(0px)";
    MusicPlayer.style.transition = "transform 1s ease";
    document.body.style.height = "auto"; 
      document.body.style.overflow = "scroll";
});
     const input = document.getElementsByClassName("song-input")[0];
     Array.from(document.getElementsByClassName("stop")).forEach(function(element){
          element.addEventListener("click",function(event){
          event.stopPropagation();
     });
     });
     
     document.getElementsByClassName("add-song")[0].addEventListener("click",()=>{
          input.click();
     });
     input.addEventListener("change",(event)=>{
          const files = event.target.files;
          if(files.length == 0){
               alert("No files Selected!");
          }
           
     const suffle = document.getElementsByClassName("suffle")[0];
     suffle.addEventListener("click",()=>{
          let index = Math.floor(files.length*Math.random());
          document.getElementsByClassName("song")[`${index}`]?.click();
     });
          for(const file of files){
              const audioName = file.name;
               const audio = new Audio();
               audio.src = URL.createObjectURL(file);
               audio.addEventListener("loadedmetadata",()=>{
                    const audioDuration = audio.duration;
                    const Songdiv = document.createElement("div");
                    Songdiv.className = "song";
                    const Img = document.createElement("img");
                    Img.className = "box";
                    Img.src  = "colorful-musical-note-art-with-vibrant-splashes-musical-note-black-surrounded_53876-651215.jpg";
                    const Textdiv = document.createElement("div");
                    Textdiv.className = "text-content";
                    const Namespan = document.createElement("span");
                    Namespan.className = "song-name";
                    Namespan.innerText = `${audioName}`;
                    const Artistspan = document.createElement("span");
                    Artistspan.className = "artist";
                    const duration =calcduration(audioDuration);
                    Artistspan.innerText = `Unknown Artist • ${duration}`;
                    const songs2 = document.getElementsByClassName("songs")[0];
                    const svg = document.createElement("div");
                    svg.innerHTML = `
          <svg   class="dot svg" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="5" r="1"/>
            <circle cx="12" cy="9" r="1"/>
            <circle cx="12" cy="13" r="1"/>
          </svg>`;
                    const dots = Array.from(document.getElementsByClassName("dot"));
     dots.forEach(dot=>{
          dot.addEventListener("click", (event) => {
               event.stopPropagation();
        const options = document.getElementById("options");
      setTimeout(()=>{
           options.style.transform = "translateY(0vh)  ";
    document.body.style.height = "100%"; // ✅ Proper way
      document.body.style.overflow = "scroll";
      },500);
               document.addEventListener("click",()=>{
                    options.style.transform = "translateY(50vh)  ";
    document.body.style.height = "100vh"; // ✅ Proper way
      document.body.style.overflow = "scroll";
               });
     });

     });
const songs = document.querySelectorAll(".song");   
const svgs = document.querySelectorAll(".svg");
const boxes = document.querySelectorAll(".box");   
const textContents = document.querySelectorAll(".text-content");   
const artists = document.querySelectorAll(".artist");
const flex = document.getElementsByClassName("flex")[0];
const grid = document.getElementsByClassName("grid")[0];
flex.addEventListener("click", () => {
     grid.style.display = "block";
     flex.style.display = "none";
let lastSong = document.querySelector(".songs").lastElementChild;
     // First group
     document.getElementsByClassName("songs")[0].classList.remove("Grid");
     document.getElementsByClassName("plus-button")[0].style.minWidth = "20vw";
     songs.forEach(song => {
          song.style.flexDirection = "row";
          song.style.width = "95vw";
     });
     lastSong.style.flexDirection = "row";
     lastSong.style.width = "95vw";
     boxes.forEach(box => {
          box.style.minWidth = "55px";
          box.style.minHeight = "55px";
     });
     lastSong.querySelector(".box").style.minWidth = "55px";
     lastSong.querySelector(".box").style.minHeight = "55px";
     textContents.forEach(content => {
          content.style.width = "66vw";
     });
      lastSong.querySelector(".text-content").style.width = "66vw";
     artists.forEach(artist => {
          artist.style.fontSize = "14px";
     });
     lastSong.querySelector(".artist").style.fontSize = "14px";
svgs.forEach(svg => {
          svg.style.display = "flex";
     });
lastSong.querySelector(".svg").style.display = "flex";
});

grid.addEventListener("click", () => {
     flex.style.display = "block";
     grid.style.display = "none";
let lastSong = document.querySelector(".songs").lastElementChild;
     // First group
     document.getElementsByClassName("songs")[0].classList.add("Grid");
     document.getElementsByClassName("plus-button")[0].style.minWidth = "34vw";
     songs.forEach(song => {
          song.style.flexDirection = "column";
          song.style.width = "45vw";
     });
     lastSong.style.flexDirection = "column";
     lastSong.style.width = "45vw";
     boxes.forEach(box => {
          box.style.minWidth = "115px";
          box.style.minHeight = "115px";
     });
     lastSong.querySelector(".box").style.minWidth = "115px";
     lastSong.querySelector(".box").style.minHeight = "115px";
     textContents.forEach(content => {
          content.style.width = "36vw";
     });
     lastSong.querySelector(".text-content").style.width = "36vw";
     artists.forEach(artist => {
          artist.style.fontSize = "12px";
     });
     lastSong.querySelector(".artist").style.fontSize = "12px";
     svgs.forEach(svg => {
          svg.style.display = "none";
     });
     lastSong.querySelector(".svg").style.display = "none";
});
                    Songdiv.appendChild(Img);
                    Songdiv.appendChild(Textdiv);
                    Textdiv.appendChild(Namespan);
                    Textdiv.appendChild(Artistspan);
                    Songdiv.appendChild(svg);
                    songs2.insertBefore(Songdiv,songs.firstChild);
                    
                    suffle.style.display = "block";
                    grid.style.display = "block";
  Songdiv.addEventListener("click", () => {
  if (CurrentPlaying) {
    CurrentPlaying.pause();
    CurrentPlaying.currentTime = 0;
    musicplayer.style.transform = "translateY(18vh)";
  }
       if(queque){
            audio.addEventListener("ended",()=>{
                 queque.play();
            });
       }
play.forEach((plays ,index)=>{
     plays.style.display="none";
     pause[index].style.display="block";
})
  audio.play();
   //its not calling  
       let timeline = setInterval(()=>{
                   document.getElementById("seek-bar").value = (audio.currentTime/audio.duration)*100;
       },0.00000005);
       audio.addEventListener("ended",()=>{
            clearInterval(timeline);
            setTimeout(()=>{
                 let songs = document.querySelectorAll(".song");
       let temp = Array.from(songs).indexOf(Songdiv) + 1;
       songs[temp].click();
            },1000);
       });
   document.getElementById("seek-bar").addEventListener("change", ()=>{
                         const time  = document.getElementById("seek-bar").value/100 * audio.duration;
                         audio.currentTime = time;
                    });
  CurrentPlaying = audio;
musicplayer.style.transform = "translateY(-0vh)";
  // Get song name and artist from the clicked Songdiv only
  const songName = Songdiv.querySelector(".song-name")?.innerText || "";
  const artistInfo = Songdiv.querySelector(".artist")?.innerText || "";

  // Display in player
  const BigplayerName = document.getElementsByClassName("song-name-player")[0];
  const playerName = document.getElementsByClassName("song-name-player-bg")[0];
  const playerData = document.getElementsByClassName("player-artist")[0];
       playerName.innerText = `${songName}`;
       playerData.innerText = `${artistInfo}`;
       BigplayerName.innerText = `${songName}`;
       document.getElementById("next").addEventListener("click",()=>{
       let songs = document.querySelectorAll(".song");
       let temp = Array.from(songs).indexOf(Songdiv) + 1;
       songs[temp].click();
       });
       document.getElementById("prev").addEventListener("click",()=>{
       let songs = document.querySelectorAll(".song");
       let temp = Array.from(songs).indexOf(Songdiv) - 1;
       songs[temp].click();
       });
  });
               });
};

 
               });
               };
 
     function calcduration(duration){
          const TotalSeconds = Math.floor(duration);
          const hours = Math.floor(TotalSeconds/3600);
          const minutes = Math.floor((TotalSeconds % 3600)/60);
          const seconds = Math.floor((TotalSeconds % 3600)%60);
          const colons = hours > 0 ? 2 : 1;
          const timer = colons > 2 ? hours + ":" + minutes + ":" + seconds : minutes + ":" + seconds;
          return timer;
          }
      