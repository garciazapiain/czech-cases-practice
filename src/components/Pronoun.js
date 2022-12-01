import React from "react";

const Pronoun = (props) => {
    return (
        <div className="boxContainer">
            <div className="boxContainerCategoryAndGenerate">
                <h4>Pronoun</h4>
                <button className="buttonNewSingle" onClick={props.generateRandomPronoun()}>New Pronoun</button>
            </div>
            <div className="boxContainerWord">
                <h4>{props.pronounIndex.pronoun ? props.pronounIndex.pronoun : ""}</h4>
            </div>
            <div className="boxContainerTranslation">
                {props.toggleShowHints ?
                    <>
                        <p>Translation:</p>
                        <h4>{props.pronounIndex.translation}</h4>
                    </>
                    :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Pronoun