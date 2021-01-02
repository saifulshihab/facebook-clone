import React, { useState } from 'react';
import { myDay, post } from '../../DemoData';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoIcon from '@material-ui/icons/Photo';
import MoodIcon from '@material-ui/icons/Mood';
import { Modal } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Gif, LiveTv, Place } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import Post from './Post';

function Newsfeed() {
  const [modalOpen, setModalOpen] = useState(false);

  const handlClose = () => {
    setModalOpen(false);
  };

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
              <button onClick={() => setModalOpen(true)}>
                What's on your mind, John?
              </button>
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
        <div className='posts'>
          {post.map((postData) => (
            <Post key={postData.id} postData={postData} />
          ))}
        </div>
      </div>
      <Modal
        className='postModal'
        open={modalOpen}
        onClose={handlClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div className='createPostBox'>
          <div className='top'>
            <div className='toptext'>
              <h2>Create Post</h2>
            </div>
            <div className='clsbtn' onClick={handlClose}>
              <CloseIcon />
            </div>
          </div>
          <div className='user_details'>
            <img src={require('../../assets/images/profile.JPG')} />
            <div className='name_'>
              <p>Saiful Islam Shihab</p>
              <span>Friends</span>
            </div>
          </div>
          <div className='input_box'>
            <input placeholder="What's on your mind, Shihab?" />
          </div>
          <div className='addmorebox'>
            <div className='left'>
              <p>Add to Your Post</p>
            </div>
            <div className='right'>
              <div className='icon'>
                <PhotoIcon style={{ color: '#00c14d' }} />
              </div>
              <div className='icon'>
                <PersonIcon style={{ color: 'rgb(42 141 255)' }} />
              </div>
              <div className='icon'>
                <MoodIcon style={{ color: '#ffd400' }} />
              </div>
              <div className='icon'>
                <Place style={{ color: '#ff4700' }} />
              </div>
              <div className='icon'>
                <LiveTv style={{ color: 'red' }} />
              </div>
              <div className='icon'>
                <Gif style={{ color: '#22b97a' }} />
              </div>
            </div>
          </div>
          <button className='postbtmbtn'>Post</button>
        </div>
      </Modal>
    </>
  );
}
export default Newsfeed;
