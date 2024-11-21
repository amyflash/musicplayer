document.addEventListener('DOMContentLoaded', function() {
    const playlistElement = document.getElementById('playlist');
    const audioElement = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;
    let playlist = [];

    // 从本地 txt 文件读取播放列表
    fetch('playlist.txt')
        .then(response => response.text())
        .then(data => {
            playlist = data.split('\n').map(line => {
                const [name, url] = line.trim().split('|');
                return { name, url };
            }).filter(item => item.name && item.url);
            playlist.forEach((song, index) => {
                const li = document.createElement('li');
                li.textContent = song.name;
                li.addEventListener('click', () => playSong(index));
                playlistElement.appendChild(li);
            });
            playSong(currentIndex);
        })
        .catch(error => console.error('Error loading playlist:', error));

    function playSong(index) {
        currentIndex = index;
        audioElement.src = playlist[currentIndex].url;
        audioElement.play();
        playPauseButton.textContent = 'Pause';
        updatePlaylistHighlight();
    }

    function updatePlaylistHighlight() {
        const lis = playlistElement.getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
            lis[i].classList.remove('active');
        }
        playlistElement.getElementsByTagName('li')[currentIndex].classList.add('active');
    }

    playPauseButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioElement.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : playlist.length - 1;
        playSong(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < playlist.length - 1) ? currentIndex + 1 : 0;
        playSong(currentIndex);
    });

    audioElement.addEventListener('ended', () => {
        currentIndex = (currentIndex < playlist.length - 1) ? currentIndex + 1 : 0;
        playSong(currentIndex);
    });
});