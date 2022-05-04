import React, {useEffect, useState} from "react";
import './app.css';
import VideoList from "./components/video-list/video-list";

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBKYyzbeAxZxTMNsmAyNBsiMQLki64ue10',
            requestOptions
        )
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);

    return <VideoList videos={videos} />;
}

export default App;
