import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({video}) => {

  return (
  <li className={styles.container}>
    <div className={styles.video}>
      <img className={styles.thumbnail} src={video.snippet.thumbnails.medium.url} alt="video thumnail"/>
      <div className={styles.metaData}>
        <p className={styles.title}>{video.snippet.title}</p>
        <p className={styles.channel}>{video.snippet.channelTitle}</p>
      </div>  
    </div>
  </li>
  )
};


export default VideoItem;   