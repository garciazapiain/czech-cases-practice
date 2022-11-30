import React from "react";
import pronounData from "../data/pronoun.json"

const Pronoun = (props) => {
    const [pronounIndex, setPronounIndex] = React.useState("")

    function generateRandom() {
        setPronounIndex(pronounData[Math.floor(Math.random() * pronounData.length)])
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
                <h4>Pronoun</h4>
                <button onClick={generateRandom}>Generate</button>
            </div>
            <div className="boxContainerWord">
                <h4>{pronounIndex.pronoun ? pronounIndex.pronoun : ""}</h4>
            </div>
            <div className="boxContainerTranslation">
                {props.toggleShowHints ?
                    <>
                        <p className="hints">Translation:</p>
                        <h4>{pronounIndex.translation}</h4>
                    </>
                    :
                    <p></p>
                }
            </div>
        </div>
    )
}

export default Pronoun