import './App.css';
import { useEffect, useState } from 'react';




import { getTypedWords, deleteTypedWord as apiDeleteTypeWord } from "./GamesService";
import GameForm from "./GameForm";
import GameCard from "./GameCard";
import WordGenerator from './WordGenerator';

function App() {
  
  // const [games, setGames] = useState([]);
  // useEffect(()=>{
  //   getGames()
  //   .then((data)=>{
  //     console.log(data);
  //     setGames(data)
  //   })
  // },[]);

  const [randomWord, setRandomWord] = useState(null);

  const [typedWord, setTypedWord] = useState("...");

  useEffect(() => {
    getRandomWord()
  }, []);

  const getRandomWord = () => {
    const wordlist = [
      'melissa',
      'dog',
      'name',
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
  //   apiDeleteGame(id).then(()=>{
  //     let temp = games.map(g=>g);
  //     const toDel = games.map(g =>g._id).indexOf(id);
  //     temp.splice(toDel, 1);
  //     setGames(temp);
  //   })

  // }

  if (randomWord == null) return <h1>Loading</h1>
  
  return (
    <div className="App">
      <WordGenerator randomWord={randomWord} getRandomWord={getRandomWord} />

  
  


      <GameForm setTypedWord={setTypedWord}/>
      <GameCard typedWord={typedWord} />
    </div>
  );
}

export default App;
