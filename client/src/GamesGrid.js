import GameCard from "./GameCard";
import Timer from "./Timer";





const GamesGrid = ({typeWord}) =>{
    if (!typeWord)return <h2>Loading</h2>
    const wordList = words.map((typedWord)=>{
        return (
            <>
                <GameCard typeWord={typeWord} key={game._id}/>
                <hr/>
            </>
        )
    });
    return (
        <>
            {wordList}
       
        </>
    );
}

export default GamesGrid;