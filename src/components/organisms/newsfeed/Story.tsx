import React from 'react';
import { Link } from 'react-router-dom';
import { IStory } from '../../../types/user';

interface IProps {
  story: IStory;
}

const Story: React.FC<IProps> = ({ story }) => {
  const { user } = story;
  return (
    <Link
      to={`/stories/${story._id}`}
      className="relative block h-48 w-28 flex-shrink-0 cursor-pointer rounded-xl bg-cover bg-center p-3 shadow"
      style={{ backgroundImage: `url(${story.image})` }}
    >
      <img
        src={user.dp}
        className="h-10 w-10 rounded-full border-4 border-white dark:border-neutral-800"
        alt="story"
      />
      <p className="absolute bottom-3 left-3 right-3 truncate text-center text-sm font-semibold text-white drop-shadow">
        {user.fullName}
      </p>
    </Link>
  );
};

export default Story;
