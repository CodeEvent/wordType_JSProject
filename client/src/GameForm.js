import { useState } from "react";

import { postGame } from "./GamesService";

const GameForm = ({ setTypedWord, randomWord }) => {


    const [inputValue, setInputValue] = useState("");
    const [secondPassed, setSecondPassed] = useState(0);
    const [inProgress, setInProgress] = useState(false);
    const [intervalId, setIntervalId] = useState(null);





    const startTimer = () => {

        setInProgress(true)

    
        const timerID = setInterval(() => {
                setSecondPassed(secondPassed => secondPassed + 1)
            }, 1000)
            setIntervalId(timerID)
    }


    const stopTimer = () => {
        setInProgress(false)
        clearInterval(intervalId)
    }


        const inputHandleChange = (event) => {
            setInputValue(event.target.value)
            if (!inProgress && secondPassed === 0) {
                startTimer()
            }
            if (event.target.value === randomWord) {
                stopTimer()
            }
        }



        const handleSubmit = event => {
            event.preventDefault()
            setTypedWord(event.target.word.value)
            let objectToPost = {
                "name": event.target.word.value
            }
            postGame(objectToPost)
        }




        return (




                <form className="" onSubmit={handleSubmit}>
                    <label htmlFor="word">Type: </label>
                    <input value={inputValue} onChange={inputHandleChange} name="word" type="text" id="word" required />

                    <input type="submit" value="Save" id="save" />

                    {
                        inProgress || (!inProgress && (secondPassed != 0)) ? 
                        <p>Seconds passed: {secondPassed}</p> : 
                        null
                    }

                </form>
        )
    }

export default GameForm;
