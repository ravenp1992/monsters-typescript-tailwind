import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';

export interface IMonster {
  id: number;
  name: string;
  username: string;
  email: string;
}

const App = () => {
  const [monsters, setMonsters] = useState<IMonster[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(result.data);
    };

    fetchData();
  }, []);

  const [searchText, setSearchText] = useState('');

  const handleOnchange = (value: string): void => {
    setSearchText(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500">
      <div className="max-w-md py-8 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-6xl">
        <p className="text-center text-8xl font-semibold font-title">
          Monster Rolodex
        </p>
        <SearchBar handleOnchange={handleOnchange} />
        <CardList monsters={monsters} searchText={searchText} />
      </div>
    </div>
  );
};

export default App;
