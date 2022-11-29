import React from "react";
import caseData from "../data/case.json"

const Case = (props) => {
    const [caseIndex, setCaseIndex] = React.useState("")

    function generateRandom(){
        setCaseIndex(caseData[Math.floor(Math.random() * caseData.length)])
    }

    React.useEffect(()=>{
        if(props.generateAll){
            generateRandom()
            props.generateAllClicked()
        }
    },[props.generateAll])
    
    return(
        <div className="boxContainer">
            <h4>Case</h4>
            <h4>{caseIndex.case}</h4>
            <button onClick={generateRandom}>Generate</button>
            {props.toggleShowHints&&
                <div>
                    <p>Case number: {caseIndex.caseType}</p>
                    <p>Translation: {caseIndex.caseNumber}</p>
                </div>
            }
        </div>
    )
}

export default Case