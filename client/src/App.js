import './App.css';
import { useEffect, useState } from 'react';




import { getTypedWords, deleteTypedWord as apiDeleteTypeWord } from "./GamesService";
import GameForm from "./GameForm";
import GameCard from "./GameCard";
import WordGenerator from './WordGenerator';

function App() {
  

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





  // const addTypedWord = (typedWord) => {
  //   let temp = typedWord.map(g => g);
  //   temp.push(typedWord);
  //   setTypedWord(temp);
  // }

  // const deleteTypedWord = (id) => {
  //   apiDeleteTypedWord(id).then(() => {
  //     let temp = typedWords.map(g => g);
  //     const toDel = typedWords.map(g => g._id).indexOf(id);
  //     temp.splice(toDel, 1);
  //     setTypedWord(temp);
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
