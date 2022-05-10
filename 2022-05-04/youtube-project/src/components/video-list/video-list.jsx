import React, {memo} from 'react';
import VideoItem from "../vedio-item/video-item";
import styles from './video-list.module.css';

const VideoList = memo(
    ({videos, onVideoClick, display}) => (
        <ul className={styles.videos}>
            {videos.map(video => (
                <VideoItem key={video.id}
                           video={video}
                           onVideoClick={onVideoClick}
                           display={display}
                />
            ))}
        </ul>
    )
);

export default VideoList;