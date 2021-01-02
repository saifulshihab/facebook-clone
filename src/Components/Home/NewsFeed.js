import React from 'react';
import { myDay } from '../../DemoData';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoIcon from '@material-ui/icons/Photo';
import MoodIcon from '@material-ui/icons/Mood';

function Newsfeed() {
  console.log(myDay);
  return (
    <>
      <div id='newsfeed'>
        <div className='mydayList'>
          <ul>
            {myDay.map((data) => (
              <li key={data.id}>
                <div
                  className='myday'
                  style={{ backgroundImage: `url(${data.mydayimg})` }}
                >
                  <div className='mydaydp'>
                    <img src={data.dp} />
                  </div>
                  <div className='myDayusername'>
                    <p>{data.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='post_form'>
          <div className='top_content'>
            <div className='user_img'>
              <img
                src={require('../../assets/images/profile.JPG')}
                alt='name'
              />
            </div>
            <div className='post_btn'>
              <button>What's on your mind? John</button>
            </div>
          </div>
          <div className='middle_content'></div>
          <div className='bottom_content'>
            <button>
              <VideoCallIcon style={{ color: 'red', marginRight: 4 }} /> Live
              Video
            </button>
            <button>
              <PhotoIcon style={{ color: '#00c14d', marginRight: 4 }} />{' '}
              Photo/Video
            </button>
            <button>
              <MoodIcon style={{ color: '#ffd400', marginRight: 4 }} />{' '}
              Feeling/Activity
            </button>
          </div>
        </div>
        <div className='posts'></div>
      </div>
    </>
  );
}
export default Newsfeed;
