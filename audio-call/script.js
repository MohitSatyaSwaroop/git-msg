let audioStream;

function startAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            audioStream = stream;
            alert("Microphone Access Granted ✅");
        })
        .catch(error => {
            alert("Microphone Permission Denied ❌");
        });
}

function stopAudio() {
    if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
        alert("Audio Stopped");
    }
}
