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
      className="to relative h-48 w-28 cursor-pointer rounded-xl p-3 shadow"
      style={{ backgroundImage: `url(${story.image})` }}
    >
      <div className="absolute">
        <img
          src={user.dp}
          className="h-10 w-10 rounded-full border-4 border-white dark:border-neutral-800"
          alt="story"
        />
      </div>
      <div className="absolute text-center" style={{ bottom: '5%' }}>
        <p className="font-semibold text-white">{user.fullName}</p>
      </div>
    </div>
  );
};

export default Story;
