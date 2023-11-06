const myAudio = document.querySelector("#audio");
const playButton = document.querySelector("#play");
const forwardButton = document.querySelector("#forward");
const backwardButton = document.querySelector("#backward");
const mySongName = document.querySelector("h3");
const mySingerName = document.querySelector("h4");
const myImage = document.querySelector("#image");

const songs = [
    {
        songName: "Bad Boy",
        singerName: "Larry Williams",
        data: 1,
    },
    {
        songName: "Into Your Arms",
        singerName: "Ava Max",
        data: 2,
    },
    {
        songName: "The Joker",
        singerName: "Glitter",
        data: 3,
    },
    {
        songName: "Come On Come On",
        singerName: "Radius Basin",
        data: 4,
    },
    {
        songName: "Senorita",
        singerName: "Shawn Mendes",
        data: 5,
    },
    // Add more songs in a similar format
];

let songPosition = 0;
let isAudioPlaying = false;

function updateSong() {
    const songData = songs[songPosition];
    mySongName.textContent = songData.songName;
    mySingerName.textContent = songData.singerName;
    myImage.src = `./css/images and songs/image${songData.data}.jpg`;
    myAudio.src = `./css/images and songs/songs/song${songData.data}.mp3`;
}

function playTheAudio() {
    myAudio.play();
    playButton.classList.replace("fa-play", "fa-pause");
    isAudioPlaying = true;
}

function pauseTheAudio() {
    myAudio.pause();
    playButton.classList.replace("fa-pause", "fa-play");
    isAudioPlaying = false;
}

function toggleAudio() {
    if (isAudioPlaying) {
        pauseTheAudio();
    } else {
        playTheAudio();
    }
}

function playNextSong() {
    songPosition = (songPosition + 1) % songs.length;
    updateSong();
    playTheAudio();
}

function playPreviousSong() {
    songPosition = (songPosition - 1 + songs.length) % songs.length;
    updateSong();
    playTheAudio();
}

playButton.addEventListener("click", toggleAudio);
forwardButton.addEventListener("click", playNextSong);
backwardButton.addEventListener("click", playPreviousSong);

// Initial song update
updateSong();

const htmlCurrentTime = document.querySelector(".currenttime");
const htmlTotalDuration = document.querySelector(".totalduration");
const childProgressBar = document.querySelector(".childprogressBar")
const audio = document.getElementById("audio");

// Update the total duration once the audio metadata is loaded
audio.addEventListener("loadedmetadata", function () {
    const totalDuration = formatTime(audio.duration);
    htmlTotalDuration.textContent = totalDuration;


});

// Update the current time as the audio plays
audio.addEventListener("timeupdate", function () {
    const currentTime = formatTime(audio.currentTime);
    htmlCurrentTime.textContent = currentTime;

    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    childProgressBar.style.width = `${progressPercentage}%`;


});

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return formattedTime;


}
