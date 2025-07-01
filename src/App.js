import './App.css';
import React from 'react';
import PageTitle from './components/PageTitle';
import AnimalForm from './components/AnimalForm';
import MainCard from './components/MainCard';
import Favorites from './components/Favorites';


const jsonLocalStorage = {
  setItem: (key, value) => {
    console.log('localStorage.setItem() 실행');
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    console.log('localStorage.getItem() 실행');
    return JSON.parse(localStorage.getItem(key));
  },
};

function App() {
  console.log(" ** App 실행 **");

  const animal01 = 'img/bear.png';
  const animal02 = 'img/elephant.png';

  const [mainAnimal, setMainAnimal] = React.useState(animal01);
  const [favorites, setfavorites] = React.useState(() => {
    console.log('favorites useState() 실행됨!');
    return jsonLocalStorage.getItem('favorites') || [];
  });

  const choiceFavorite = favorites.includes(mainAnimal);

  const [count, setCount] = React.useState(() => {
    console.log('count useState() 실행됨!');
    return jsonLocalStorage.getItem('count') || 1;
  });

  function incrementCount() {
    setCount((pre) => {
      const nextCount = pre + 1;
      localStorage.setItem('count', JSON.stringify(nextCount));
      return nextCount;
    });
  }

  function updateMainAnimal() {
    setMainAnimal(animal02);
    incrementCount();
  };

  function handleHeartClick() {
    setfavorites((pre) => {
      const nextFavorites = [...pre, mainAnimal];
      localStorage.setItem('favorites', JSON.stringify(nextFavorites))
      return nextFavorites;
    });
  }

  return (
    <div>
      <PageTitle>🌼_ {count} 페이지 _🌼</PageTitle>
      <AnimalForm updateMainAnimal={updateMainAnimal} />
      <MainCard
        src={mainAnimal}
        alt="아기 곰"
        handleHeartClick={handleHeartClick}
        choiceFavorite={choiceFavorite}
      />
      <Favorites favorites={favorites} />
    </div>
  );
}

export default App;
