import React from "react";

const Noun = (props) => {
    return (
        <div className="boxContainer">
            <div className="boxContainerCategoryAndGenerate">
                <h4>Noun</h4>
                <button className="buttonNewSingle" onClick={props.generateRandomNoun()}>New Noun</button>
            </div>
            <div className="boxContainerWord">
                <h4>{props.nounIndex.noun}</h4>
            </div>
            <div className="boxContainerTranslationNoun">
                {props.toggleShowHints ?
                    <>
                    <div className="boxContainerTranslationNounSection">
                        <p>Gender:</p>
                        <h4>{props.nounIndex.gender}</h4>
                    </div>
                    <div className="boxContainerTranslationNounSection">
                        <p>Translation:</p>
                        <h4> {props.nounIndex.translation}</h4>
                    </div>
                    <div className="boxContainerTranslationNounSection">
                        <p>More info:</p>
                        <a target="_blank" href={`https://en.wiktionary.org/wiki/${props.nounIndex.noun}`}>links</a>
                    </div>
                    </>
                    :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Noun