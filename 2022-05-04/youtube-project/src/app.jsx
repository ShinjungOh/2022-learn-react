import React, {useEffect, useState} from "react";
import './app.module.css';
import VideoList from "./components/video-list/video-list";
import SearchHeader from "./components/search-header/search-header";
import styles from "./components/vedio-item/video-item.module.css";

function App({youtube}) {
    const [videos, setVideos] = useState([]);
    const search = query => {
        youtube.search(query)
            .then(videos => setVideos(videos));
    };

    useEffect(() => {
        youtube.mostPopular()
            .then(videos => setVideos(videos));
    }, []);

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search}/>
            <VideoList videos={videos}/>;
        </div>
    );
}

export default App;
