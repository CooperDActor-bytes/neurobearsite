const apiKey = 'AIzaSyBKC-k_7uhy35oVrr52fzWRzpgvL2QBnys'; // Replace with your actual YouTube API key
const channelId = 'UC8ObOjIpTEwLrzlssxBAQEw';   // Replace with your actual YouTube channel ID

// YouTube API URL for fetching videos (uploads playlist)
const videoUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UU$UC8ObOjIpTEwLrzlssxBAQEw&key=$AIzaSyBKC-k_7uhy35oVrr52fzWRzpgvL2QBnys`;
// YouTube API URL for fetching shorts
const shortsUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&channelId=$UC8ObOjIpTEwLrzlssxBAQEw&videoDuration=short&key=$AIzaSyBKC-k_7uhy35oVrr52fzWRzpgvL2QBnys`;

// Fetch and display the latest videos
fetch(videoUrl)
    .then(response => response.json())
    .then(data => {
        const videoList = document.getElementById('video-list');
        data.items.forEach(item => {
            const video = document.createElement('div');
            video.classList.add('video');
            video.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${item.snippet.resourceId.videoId}" frameborder="0" allowfullscreen></iframe>
                <p>${item.snippet.title}</p>
            `;
            videoList.appendChild(video);
        });
    })
    .catch(error => console.error('Error fetching videos:', error));

// Fetch and display the latest shorts
fetch(shortsUrl)
    .then(response => response.json())
    .then(data => {
        const shortsList = document.getElementById('shorts-list');
        data.items.forEach(item => {
            const short = document.createElement('div');
            short.classList.add('video');
            short.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                <p>${item.snippet.title}</p>
            `;
            shortsList.appendChild(short);
        });
    })
    .catch(error => console.error('Error fetching shorts:', error));
