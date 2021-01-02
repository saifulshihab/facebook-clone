import React from 'react';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoodTwoToneIcon from '@material-ui/icons/MoodTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@material-ui/icons/SentimentDissatisfiedTwoTone';

const Post = ({ postData }) => {
  return (
    <div>
      <div className='post'>
        <div className='top'>
          <div className='u_dp'>
            <img alt='' src={postData.dp && postData.dp} />
          </div>
          <div className='_name'>
            <p>{postData.user_fname}</p>
            <span>{postData.createdAt}</span>
          </div>
        </div>
        {postData.caption !== '' && (
          <div className='caption'>
            <span>{postData.caption}</span>
          </div>
        )}

        <div className='postImg'>
          <img alt='' src={postData.image && postData.image} />
        </div>
        <div className='likecmtShare'>
          <div className='likewrap'>
            <span>
              <ThumbUpAltIcon
                style={{
                  fontSize: 16,
                  color: 'rgb(0, 114, 245)',
                }}
              />
              <FavoriteTwoToneIcon style={{ fontSize: 16, color: 'red' }} />
              <MoodTwoToneIcon style={{ fontSize: 16, color: '#52bb77' }} />
              <SentimentDissatisfiedTwoToneIcon
                style={{ fontSize: 16, color: '#ffa500' }}
              />
            </span>
            <span>{postData.like}</span>
          </div>
          <div className='cmnrshareWrap'>
            <span style={{ marginRight: 10 }}>{postData.comment} Comments</span>
            <span>{postData.share} Shares</span>
          </div>
        </div>
        <div className='reactionBtns'>
          <div>
            <ThumbUpAltOutlinedIcon style={{ fontSize: 16, marginRight: 7 }} />
            Like
          </div>
          <div>
            <ChatBubbleOutlineOutlinedIcon
              style={{ fontSize: 16, marginRight: 7 }}
            />
            Comment
          </div>
          <div>
            <ShareOutlinedIcon style={{ fontSize: 16, marginRight: 7 }} /> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
