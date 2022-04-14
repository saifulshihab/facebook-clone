import React from 'react';
import { IStory } from '../../../types/user';

interface IProps {
  story: IStory;
}

const Story: React.FC<IProps> = (props) => {
  const { story } = props;
  const { user } = story;
  return (
    <div
      className="w-28 h-48 relative rounded-xl p-3 to-pink-500 shadow cursor-pointer"
      style={{ backgroundImage: `url(${story.image})` }}
    >
      <div className="absolute">
        <img
          src={user.dp}
          className="w-10 h-10 rounded-full border-4 border-white"
          alt="story"
        />
      </div>
      <div className="absolute text-center" style={{ bottom: '5%' }}>
        <p className="text-white font-semibold">{user.fullname}</p>
      </div>
    </div>
  );
};

export default Story;
