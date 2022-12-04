import React from "react";

const Verb = (props) => {
    let verbKeyForLink = ""
    if(props.verbIndex.verb){
        const split = props.verbIndex.verb.split(" ")
        verbKeyForLink = split[0]
    }
    return (
        <div className="boxContainer">
            <div className="boxContainerCategoryAndGenerate">
                <h4>Verb</h4>
                <button className="buttonNewSingle" onClick={props.generateRandomVerb()}>New Verb</button>
            </div>
            <div className="boxContainerWord">
                <h4>{props.verbIndex.verb}</h4>
            </div>
            <div className="boxContainerTranslationNoun">
                {props.toggleShowHints ?
                    <>
                        <div className="boxContainerTranslationNounSection">
                            <p> Translation:</p>
                            <h4> {props.verbIndex.translation}</h4>
                        </div>
                        <div className="boxContainerTranslationNounSection">
                            <p>More info:</p>
                            <div>
                                <a target="_blank" href={`https://en.wiktionary.org/wiki/${verbKeyForLink}`}>links</a>
                            </div>
                        </div>
                    </>
                    :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Verb