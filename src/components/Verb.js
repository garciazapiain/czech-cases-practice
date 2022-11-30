import React from "react";
import verbData from "../data/verb.json"

const Verb = (props) => {
    const [verbIndex, setVerbIndex] = React.useState("")

    function generateRandom() {
        setVerbIndex(verbData[Math.floor(Math.random() * verbData.length)])
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
                <h4>Verb</h4>
                <button onClick={generateRandom}>Generate</button>
            </div>
            <div className="boxContainerWord">
                <h4>{verbIndex.verb}</h4>
            </div>
            <div className="boxContainerTranslationNoun">
                {props.toggleShowHints ?
                    <>
                        <div className="boxContainerTranslationNounSection">
                            <p className="hints">Translation:</p>
                            <h4> {verbIndex.translation}</h4>
                        </div>
                        <div className="boxContainerTranslationNounSection">
                            <p className="hints">More info:</p>
                            <a target="_blank" href={`https://en.wiktionary.org/wiki/${verbIndex.verb}`}>links</a>
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