import React, {useState, useEffect} from 'react';
import styles from './app.module.css';
import {searchVideo, mostPopular} from './service/youtube'
import VideoList from './components/videoList/videoList';
import Header from './components/header/header';


function App() {

  const [videos, setVideos] = useState([]);
  //clickedVideo 상태 만들기. 클릭이 되면 아예 다른 컴포넌트 랜더링하기
  

  const search = (query) => {
    searchVideo(query)
    .then(items => {// 위에서 이제 result.items를 받아옴(배열)
      //console.log(items)
      setVideos(items)})
    .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    mostPopular()
    .then(result => {
      //console.log(result)
      setVideos(result)})
    .catch(error => console.log('error', error));
  }, []);


  return (
    <div className={styles.app}>
      <Header onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
