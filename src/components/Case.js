import React from "react";
import caseData from "../data/case.json"

const Case = (props) => {
    const [caseIndex, setCaseIndex] = React.useState("")

    function generateRandom() {
        setCaseIndex(caseData[Math.floor(Math.random() * caseData.length)])
    }

    React.useEffect(() => {
        if (props.generateAll) {
            generateRandom()
            props.generateAllClicked()
        }
    }, [props.generateAll])

    return (
        <div className="boxContainer">
            <div className="boxContainerCategoryAndGenerate">
                <h4>Case</h4>
                <button onClick={generateRandom}>Generate</button>
            </div>
            <div className="boxContainerWord">
                <h4>{caseIndex.case}</h4>
            </div>
            <div className="boxContainerTranslationNoun">
                {props.toggleShowHints ?
                    <>
                        <div className="boxContainerTranslationNounSection">
                            <p>Case number:</p>
                            <h4>{caseIndex.caseNumber}</h4>
                        </div>
                        <div className="boxContainerTranslationNounSection">
                            <p>Type:</p>
                            <h4>{caseIndex.caseType}</h4>
                        </div>
                        <div className="boxContainerTranslationNounSection">
                            <p>Translation:</p>
                            <h4>{caseIndex.translation}</h4>
                        </div>
                    </>
                    :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Case