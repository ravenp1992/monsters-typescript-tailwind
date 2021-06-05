import React from 'react';
import { IMonster } from '../../App';
import Card from '../card/Card';

interface CardListProp {
  monsters: IMonster[];
  searchText: string;
}

const CardList = ({ monsters, searchText }: CardListProp) => {
  const filteredMonster = monsters.filter((monster) =>
    monster.username.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredMonster.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;
