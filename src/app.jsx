import React, {useState, useEffect} from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import Header from './components/header/header';


function App() {

  const [videos, setVideos] = useState([])

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
    <>
    <Header />
    <VideoList videos={videos}/>
    </>
  );
}

export default App;
