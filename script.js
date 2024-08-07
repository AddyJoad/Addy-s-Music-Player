console.log("Welcome to A.M.P");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =  Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Meri Kahani - Atif Aslam", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName: "Kahani Suno - Kaifi Khalil", filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songName: "Beetein Lamhe- KK", filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songName: "Dil Iabadat - KK", filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songName: "Zaroori Tha - RFAK", filePath:"songs/5.mp3" , coverPath:"covers/5.jpg"},
    {songName: "Nadaan Parinde - A.R. Rahman", filePath:"songs/6.mp3" , coverPath:"covers/6.jpg"},
    {songName: "Judai - Pritam ", filePath:"songs/7.mp3" , coverPath:"covers/7.jpg"},
    {songName: "Starboy - The Weekend ", filePath:"songs/8.mp3" , coverPath:"covers/8.jpg"},
    {songName: "Thunder - Imagine Dragons ", filePath:"songs/9.mp3" , coverPath:"covers/9.jpg"},
    {songName: "See you Agian - Wiz Khalifa ", filePath:"songs/10.mp3" , coverPath:"covers/10.jpg"},
    {songName: "Shape of you - Ed Sheeran ", filePath:"songs/11.mp3" , coverPath:"covers/11.jpg"},
    {songName: "Rockstar - Post Malone ", filePath:"songs/12.mp3" , coverPath:"covers/12.jpg"},
    {songName: "Perfect - Ed Sheeran", filePath:"songs/13.mp3" , coverPath:"covers/13.jpg"},
    {songName: "Sunflower - Post Malone ", filePath:"songs/14.mp3" , coverPath:"covers/14.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();

// Handle Play/Pause Click
masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})





// Listen to event
audioElement.addEventListener('timeupdate', ()=>{
    // Update SongBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-circle-pause');
        e.target.classList.remove('fa-circle-play');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=7) {
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0) {
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
