import React from "react";
import nounData from "../data/noun.json"

const Noun = (props) => {
    const [nounIndex, setNounIndex] = React.useState("")

    function generateRandom() {
        setNounIndex(nounData[Math.floor(Math.random() * nounData.length)])
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
                <h4>Noun</h4>
                <button onClick={generateRandom}>Generate</button>
            </div>
            <div className="boxContainerWord">
                <h4>{nounIndex.noun}</h4>
            </div>
            <div className="boxContainerTranslationNoun">
                {props.toggleShowHints ?
                    <>
                    <div className="boxContainerTranslationNounSection">
                        <p className="hints">Gender:</p>
                        <h4>{nounIndex.gender}</h4>
                    </div>
                    <div className="boxContainerTranslationNounSection">
                        <p className="hints">Translation:</p>
                        <h4> {nounIndex.translation}</h4>
                    </div>
                    <div className="boxContainerTranslationNounSection">
                        <p className="hints">More info:</p>
                        <a target="_blank" href={`https://en.wiktionary.org/wiki/${nounIndex.noun}`}>links</a>
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