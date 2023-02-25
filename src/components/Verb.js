import React from "react";
import Select from 'react-select'
import verbData from "../data/verb.json"

const Verb = (props) => {
    const [selectOptionActive, setSelectOptionActive] = React.useState(false)
    const [valueSelected, setValueSelected] = React.useState("Select")
    function selectOptionActiveToggle (){
        setSelectOptionActive(!selectOptionActive)
    }
    function selectOptionClick (value){
        setValueSelected(value)
    }
    const options = verbData.map(verb => ({
        value: verb.verb,
        label: verb.verb
      }));  
    React.useEffect(()=>{
        if(valueSelected!="Select"){
            props.selectVerb(valueSelected.value)
        }
    },[valueSelected])    

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
                {!selectOptionActive ? 
                    <button className="buttonNewSingle" onClick={selectOptionActiveToggle}>Select</button> 
                    :
                <div className="buttonSelectOptionContainer">
                    <Select className="buttonSelectOption" options={options}  value={valueSelected} placeholder={valueSelected}
                    onChange={(value)=>selectOptionClick(value)} />
                    <button onClick={selectOptionActiveToggle}>x</button>
                </div>
                } 
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