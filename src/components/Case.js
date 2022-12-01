import React from "react";

const Case = (props) => {
    return (
        <div className="boxContainer">
            <div className="boxContainerCategoryAndGenerate">
                <h4>Case</h4>
                <button className="buttonNewSingle" onClick={props.generateRandomCase()}>New Case</button>
            </div>
            <div className="boxContainerWord">
                <h4>{props.caseIndex.case}</h4>
            </div>
            <div className="boxContainerTranslationNoun">
                {props.toggleShowHints ?
                    <>
                        <div className="boxContainerTranslationNounSection">
                            <p>Case number:</p>
                            <h4>{props.caseIndex.caseNumber}</h4>
                        </div>
                        <div className="boxContainerTranslationNounSection">
                            <p>Type:</p>
                            <h4>{props.caseIndex.caseType}</h4>
                        </div>
                        <div className="boxContainerTranslationNounSection">
                            <p>Translation:</p>
                            <h4>{props.caseIndex.translation}</h4>
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