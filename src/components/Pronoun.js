import React from "react";
import pronounData from "../data/pronoun.json"

const Pronoun = (props) => {
    const [pronounIndex, setPronounIndex] = React.useState("")

    function generateRandom(){
        setPronounIndex(pronounData[Math.floor(Math.random() * pronounData.length)])
    }

    React.useEffect(()=>{
        if(props.generateAll){
            generateRandom()
            props.generateAllClicked()
        }
    },[props.generateAll])
    
    return(
        <div className="boxContainer">
            <h4>Pronoun</h4>
            <h4>{pronounIndex.pronoun}</h4>
            <button onClick={generateRandom}>Generate</button>
            {props.toggleShowHints&&
                <div>
                    <p>Translation: {pronounIndex.translation}</p>
                </div>
            }
        </div>
    )
}

export default Pronoun