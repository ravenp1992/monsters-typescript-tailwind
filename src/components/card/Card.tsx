import React from 'react';
import { IMonster } from '../../App';

interface CardProp {
  monster: IMonster;
}

const Card = ({ monster }: CardProp) => {
  return (
    <div className="shadow-lg rounded flex flex-col items-center py-4 px-2 transform hover:-translate-y-1 duration-200 border border-green-500">
      <div className="object-cover overflow-hidden">
        <img
          src={`https://robohash.org/${monster.id}?size=180x180`}
          alt={monster.name}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl font-semibold">{monster.username}</p>
        <p>{monster.email}</p>
      </div>
    </div>
  );
};

export default Card;
