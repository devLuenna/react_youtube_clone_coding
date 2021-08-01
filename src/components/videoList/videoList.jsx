import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css';


const VideoList = ({videos}) => (
  <ul className={styles.videoList}>
    {videos.map(el => 
    <VideoItem key={el.id} video={el}/>)}
  </ul>
);

export default VideoList; 