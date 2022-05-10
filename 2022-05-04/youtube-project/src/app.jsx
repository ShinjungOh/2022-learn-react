import React, {useCallback, useEffect, useState} from "react";
import styles from './app.module.css';
import VideoList from "./components/video-list/video-list";
import SearchHeader from "./components/search-header/search-header";
import VideoDetail from "./components/video-detail/video-detail";

function App({youtube}) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = useCallback(video => {
        setSelectedVideo(video);
    }, []);

    const onClickLogo = useCallback(() => {
        setSelectedVideo(null);
    }, []);

    const search = useCallback(query => {
        youtube
            .search(query)
            .then(videos => {
                setVideos(videos);
                setSelectedVideo(null);
            });
    }, [youtube]);

    useEffect(() => {
        youtube
            .mostPopular()
            .then(videos => setVideos(videos));
    }, [youtube]);

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} onClickLogo={onClickLogo}/>
            <section className={styles.content}>
                {selectedVideo && (
                    <div className={styles.detail}>
                        <VideoDetail video={selectedVideo}/>
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList videos={videos}
                               onVideoClick={selectVideo}
                               display={selectedVideo ? 'list' : 'grid'}/>
                </div>
            </section>
        </div>
    );
}

export default App;
