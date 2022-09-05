import './App.css';
import { useEffect, useState } from 'react';

import { getGames, deleteGame as apiDeleteGame } from "./GamesService";
import GameForm from "./GameForm";
import GamesGrid from "./GamesGrid";
import WordGenerator from './WordGenerator';

function App() {
  

  const [randomWord, setRandomWord] = useState(null);

  useEffect(() => {
    getRandomWord()
  }, []);

  const getRandomWord = () => {
    const wordlist = [
      'dog',
      'potato',
      'cow',
      'parrot',
      'stone',
      'watch',
      'house',
      'biolumonesance',
      'brake',
      'potato/salad',
      'trip',
      'hipopotomus',
      'mask',
      'chicken',
      'Pneumonoultramicroscopicsilicovolcanoconiosis',
    ]

    const randomIndex = Math.floor(Math.random() * wordlist.length);

    setRandomWord(wordlist[randomIndex])
  }


  // const addGame = (game) => {
  //   let temp = games.map(g => g);
  //   temp.push(game);
  //   setGames(temp);
  // }

  // const deleteGame = (id) => {
  //   apiDeleteGame(id).then(() => {
  //     let temp = games.map(g => g);
  //     const toDel = games.map(g => g._id).indexOf(id);
  //     temp.splice(toDel, 1);
  //     setGames(temp);
  //   })

  // }

  if (randomWord == null) return <h1>Loading</h1>
  
  return (
    <div className="App">
      <WordGenerator randomWord={randomWord} getRandomWord={getRandomWord} />

      


      {/* <GameForm addGame={addGame} />
      <GamesGrid games={games} deleteGame={deleteGame} /> */}
    </div>
  );
}

export default App;
