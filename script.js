document.addEventListener("DOMContentLoaded", function() {
    const videoID = "VIDEO_ID"; // Substitua por um ID de vídeo dinâmico
    const videoTitle = "Video Title";
    const videoDetails = "Details about the video.";

    document.getElementById("youtube-video").src = `https://www.youtube.com/embed/${videoID}`;
    document.getElementById("video-title").innerText = videoTitle;
    document.getElementById("video-details").innerText = videoDetails;
});
