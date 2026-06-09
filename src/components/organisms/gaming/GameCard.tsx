import React from 'react';
import { IGame } from '../../../types/game';

interface IProps {
  game: IGame;
  size?: 'md' | 'lg';
}

const GameCard: React.FC<IProps> = ({ game, size = 'md' }) => {
  const dimensions = size === 'lg' ? 'w-36 h-44 md:w-40 md:h-48' : 'w-28 h-36 md:w-36 md:h-44';

  return (
    <div
      className={`${dimensions} relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow transition-transform hover:scale-[1.02]`}
    >
      <img src={game.image} alt={game.title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-2">
        {game.players && game.players.length > 0 && (
          <div className="mb-1 flex items-center">
            {game.players.slice(0, 3).map((p, i) => (
              <img
                key={p._id}
                src={p.dp}
                alt=""
                className={`h-5 w-5 rounded-full border border-white object-cover ${i > 0 ? '-ml-1.5' : ''}`}
              />
            ))}
          </div>
        )}
        <p className="truncate text-xs font-semibold leading-tight text-white">{game.title}</p>
        <span className="mt-0.5 inline-block rounded-full bg-black/50 px-1.5 py-0.5 text-[10px] text-gray-200">
          {game.category}
        </span>
      </div>
    </div>
  );
};

export default GameCard;
