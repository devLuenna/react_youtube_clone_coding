
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

export function searchVideo(query) {
  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCax4Vpb9uV-Mgf9lvgZFmMCJ0lXr9j_d0`, requestOptions)
    .then(response => response.json()) //text() --> json()으로 바꿔준다
    .then(result => 
      //사실 items의 배열 요소인 item(객체)의 id값은 고유한 primitive타입 값이 아니라 객체형태로 되어있다.
      //그 안에서 item.id.videoId가 진짜 id값이라는 것...!
      //따라서 해당 객체를 구조분해 할당해놓고 id값을 다시 overwrite 시킨다.
      result.items.map((item) => ({...item ,id: item.id.videoId}))
    )
    // 위에서 이제 result.items를 받아옴(배열)
}

export function mostPopular(){ 
  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  return fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=27&key=AIzaSyCax4Vpb9uV-Mgf9lvgZFmMCJ0lXr9j_d0", requestOptions)
    .then(response => response.json())
    .then(result => result.items) //promise 리턴
}

