import React from "react";
import verbData from "../data/verb.json"

const Verb = (props) => {
    const [verbIndex, setVerbIndex] = React.useState("")

    function generateRandom(){
        setVerbIndex(verbData[Math.floor(Math.random() * verbData.length)])
    }

    React.useEffect(()=>{
        if(props.generateAll){
            generateRandom()
            props.generateAllClicked()
        }
    },[props.generateAll])

    return(
        <div className="boxContainer">
            <h4>Verb</h4>
            <h4>{verbIndex.verb}</h4>
            <button onClick={generateRandom}>Generate</button>
            {props.toggleShowHints&&
                <div>
                    <p>Translation: {verbIndex.translation}</p>
                </div>
            }
        </div>
    )
}

export default Verb