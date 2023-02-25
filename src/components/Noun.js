import React from "react";
import Select from 'react-select'
import nounData from "../data/noun.json"

const Noun = (props) => {
    const [selectOptionActive, setSelectOptionActive] = React.useState(false)
    const [valueSelected, setValueSelected] = React.useState("Select")
    function selectOptionActiveToggle (){
        setSelectOptionActive(!selectOptionActive)
    }
    function selectOptionClick (value){
        setValueSelected(value)
    }
    const options = nounData.map(noun => ({
        value: noun.noun,
        label: noun.noun
      }));  
    React.useEffect(()=>{
        if(valueSelected!="Select"){
            console.log(valueSelected)
            props.selectNoun(valueSelected.value)
        }
    },[valueSelected]) 
    return (
        <div className="boxContainer">
            <div className="boxContainerCategoryAndGenerate">
                <h4>Noun</h4>
                <button className="buttonNewSingle" onClick={props.generateRandomNoun()}>New Noun</button>
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