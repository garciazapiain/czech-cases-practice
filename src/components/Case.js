import React from "react";
import Select from 'react-select'
import caseData from "../data/case.json"

const Case = (props) => {
    const [selectOptionActive, setSelectOptionActive] = React.useState(false)
    const [valueSelected, setValueSelected] = React.useState("Select")
    function selectOptionActiveToggle (){
        setSelectOptionActive(!selectOptionActive)
    }
    function selectOptionClick (value){
        setValueSelected(value)
    }
    const options = caseData.map(caseValue => ({
        value: caseValue.case,
        label: caseValue.case
      }));  
    React.useEffect(()=>{
        if(valueSelected!="Select"){
            console.log(valueSelected)
            props.selectCase(valueSelected.value)
        }
    },[valueSelected])   
    return (
        <div className="boxContainer">
            <div className="boxContainerCategoryAndGenerate">
                <h4>Case</h4>
                <button className="buttonNewSingle" onClick={props.generateRandomCase()}>New Case</button>
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