import React from "react";
import nounData from "../data/noun.json"

const Noun = (props) => {
    const [nounIndex, setNounIndex] = React.useState("")

    function generateRandom(){
        setNounIndex(nounData[Math.floor(Math.random() * nounData.length)])
    }

    React.useEffect(()=>{
        if(props.generateAll){
            generateRandom()
            props.generateAllClicked()
        }
    },[props.generateAll])

    return(
        <div className="boxContainer">
            <h4>Noun</h4>
            <h4>{nounIndex.noun}</h4>
            <button onClick={generateRandom}>Generate</button>
            {props.toggleShowHints&&
                <div>
                    <p>Gender: {nounIndex.gender}</p>
                    <p>Translation: {nounIndex.translation}</p>
                    <a target="_blank" href={`https://en.wiktionary.org/wiki/${nounIndex.noun}`}>links</a>
                </div>
            }
        </div>
    )
}

export default Noun