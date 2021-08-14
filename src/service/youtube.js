
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

export async function searchVideo(query) {
  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`, requestOptions);
  const result_1 = await response.json();
  return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
    //사실 items의 배열 요소인 item(객체)의 id값은 고유한 primitive타입 값이 아니라 객체형태로 되어있다.
    //그 안에서 item.id.videoId가 진짜 id값이라는 것...!
    //따라서 해당 객체를 구조분해 할당해놓고 id값을 다시 overwrite 시킨다.
    // 위에서 이제 result.items를 받아옴(배열)
}

export async function mostPopular(){ 
  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=27&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`, requestOptions);
  const result_1 = await response.json();
  return result_1.items; //promise 리턴
}

