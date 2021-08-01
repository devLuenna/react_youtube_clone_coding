import React, {useState, useEffect} from 'react';
import styles from './app.module.css';
import VideoList from './components/videoList/videoList';
import Header from './components/header/header';


function App() {

  const [videos, setVideos] = useState([])
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCax4Vpb9uV-Mgf9lvgZFmMCJ0lXr9j_d0`, requestOptions)
      .then(response => response.json())
      .then(result => 
        result.items.map((item) => ({...item ,id: item.id.videoId})
        ))
      .then(items => {
        console.log(items)
        setVideos(items)})
      .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=27&key=AIzaSyCax4Vpb9uV-Mgf9lvgZFmMCJ0lXr9j_d0", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setVideos(result.items)})
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
