import React from "react";
import Select from 'react-select'
import pronounData from "../data/pronoun.json"

const Pronoun = (props) => {
    const [selectOptionActive, setSelectOptionActive] = React.useState(false)
    const [valueSelected, setValueSelected] = React.useState("Select")
    function selectOptionActiveToggle (){
        setSelectOptionActive(!selectOptionActive)
    }
    function selectOptionClick (value){
        setValueSelected(value)
    }
    const options = pronounData.map(pronoun => ({
        value: pronoun.pronoun,
        label: pronoun.pronoun
      }));  
    React.useEffect(()=>{
        if(valueSelected!="Select"){
            console.log(valueSelected)
            props.selectPronoun(valueSelected.value)
        }
    },[valueSelected])    
    return (
        <div className="boxContainer">
            <div className="boxContainerCategoryAndGenerate">
                <h4>Pronoun</h4>
                <button className="buttonNewSingle" onClick={props.generateRandomPronoun()}>New Pronoun</button>
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