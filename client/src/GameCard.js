const GameCard = ({ typedWord }) => {
    return (
        <>
             <h1>You typed: {typedWord}</h1>

            {/* <p>Max Players: {game.players.max}</p>
            <p>Min Players: {game.players.min}</p> */}
            {/* <p>Playing Time: {game.playingTime}</p> */}
            {/* <button onClick={()=>deleteGame(game._id)}> 🗑 </button> */}

        </>
    )
}


export default GameCard;