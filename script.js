document.addEventListener("DOMContentLoaded", function() {
    const videoID = "VIDEO_ID"; // Substitua por um ID de vídeo dinâmico
    const videoTitle = "Video Title";
    const videoDetails = "Details about the video.";

    document.getElementById("youtube-video").src = `https://www.youtube.com/embed/${videoID}`;
    document.getElementById("video-title").innerText = videoTitle;
    document.getElementById("video-details").innerText = videoDetails;

    // Exemplo para adicionar mais vídeos sugeridos dinamicamente
    const suggestedList = document.getElementById('suggested-list');
    const suggestedVideos = [
        { id: 'another_video_id_1', title: 'Suggested Video 1', thumbnail: 'thumbnail1.jpg' },
        { id: 'another_video_id_2', title: 'Suggested Video 2', thumbnail: 'thumbnail2.jpg' },
        // Adicione mais vídeos conforme necessário
    ];

    suggestedVideos.forEach(video => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${video.id}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span>${video.title}</span>
            </a>
        `;
        suggestedList.appendChild(li);
    });
});
