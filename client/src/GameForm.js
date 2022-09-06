import {useState} from "react";

import {postGame} from "./GamesService";

const GameForm = ({setTypedWord}) => {


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
            <input name="word" type="text" id="word" required/>

            <input type="submit" value="Save" id="save"/>

        </form>
    )
}
export default GameForm;