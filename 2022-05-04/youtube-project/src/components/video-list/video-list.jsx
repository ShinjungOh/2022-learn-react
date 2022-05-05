import React from 'react';
import VideoItem from "../vedio-item/video-item";
import styles from './video-list.module.css';

const VideoList = props => (
    <ul className={styles.videos}>
        {props.videos.map(video => (<VideoItem key={video.id} video={video}/>))}
    </ul>
);

export default VideoList;