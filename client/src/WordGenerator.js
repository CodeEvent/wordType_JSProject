const WordGenerator = ({randomWord, getRandomWord}) => {
    const handleRandomiser = () => {
        getRandomWord()
    }



    return (
        <div>
            <h2>Type this word as fast as you can</h2>
            <h3>
                {randomWord}
            </h3>
            <div>
                <button onClick={handleRandomiser}>Generate</button>
            </div>
        </div>
    ) 
         
}

export default WordGenerator;