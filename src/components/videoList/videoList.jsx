import React from 'react';
import VideoItem from '../videoItem/videoItem';

const VideoList = ({videos}) => (
  <ul>
    {videos.map(el => 
    <VideoItem key={el.id} video={el}/>)}
  </ul>
);

export default VideoList; 