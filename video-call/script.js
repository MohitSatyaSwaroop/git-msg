let videoStream;

function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoStream = stream;
            document.getElementById("video").srcObject = stream;
        })
        .catch(error => {
            alert("Camera Permission Denied ❌");
        });
}

function stopVideo() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        alert("Video Stopped");
    }
}
