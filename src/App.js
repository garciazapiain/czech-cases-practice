import React from "react";
import './App.css';
import Pronoun from "./components/Pronoun"
import Verb from "./components/Verb"
import Case from "./components/Case"
import Noun from "./components/Noun"
import verbData from "./data/verb.json"
import pronounData from "./data/pronoun.json"
import caseData from "./data/case.json"
import nounData from "./data/noun.json"

function App() {
  const [toggleShowHints, setToggleShowHints] = React.useState("")
  const [generateAll, setGenerateAll] = React.useState(false)

  const [verbIndex, setVerbIndex] = React.useState("")
  const [verbAnswer, setVerbAnswer] = React.useState("")
  const [pronounIndex, setPronounIndex] = React.useState("")
  const [caseIndex, setCaseIndex] = React.useState("")
  const [nounIndex, setNounIndex] = React.useState("")
  const [nounAnswer, setNounAnswer] = React.useState("")

  const [themeDark, setThemeDark] = React.useState(false)

  function toggleTheme () {
    setThemeDark(!themeDark)
  };
  React.useEffect(() => {
    if(themeDark){
      document.body.className = "dark";
    }
    else {
      document.body.className = ""
    }
  }, [themeDark]);

  function generateRandomVerb() {
    setVerbIndex(verbData[Math.floor(Math.random() * verbData.length)])
    setVerbAnswer("")
  }

  function generateRandomPronoun() {
    setPronounIndex(pronounData[Math.floor(Math.random() * pronounData.length)])
    setVerbAnswer("")
  }

  function generateRandomCase() {
    setCaseIndex(caseData[Math.floor(Math.random() * caseData.length)])
    setNounAnswer("")
  }

  function generateRandomNoun() {
    setNounIndex(nounData[Math.floor(Math.random() * nounData.length)])
    setNounAnswer("")
  }

  function toggleShowHintsClicked() {
    setToggleShowHints(!toggleShowHints)
  }

  function generateAllClicked() {
    generateRandomVerb()
    generateRandomPronoun()
    generateRandomCase()
    generateRandomNoun()
  }

  function createAnswers() {
    setVerbAnswer(verbIndex.conjugation[pronounIndex.pronoun])
    setNounAnswer(nounIndex.declension[caseIndex.caseType])
  } 

  return (
    <div className="App">
      <div>
        <div className="toggleThemeSwitch">
          <label onTouchStart={toggleTheme} class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
          <p>{themeDark?"set light mode":"set dark mode"}</p>
        </div>
        <h1>Czech cases practice</h1>
      </div>
      <div className='generatorContainer'>
        <Pronoun
          toggleShowHints={toggleShowHints}
          generateAll={generateAll}
          generateAllClicked={() => generateAllClicked}
          generateRandomPronoun={() => generateRandomPronoun}
          pronounIndex={pronounIndex}
        />
        <Verb
          toggleShowHints={toggleShowHints}
          generateAll={generateAll}
          generateAllClicked={() => generateAllClicked}
          generateRandomVerb={() => generateRandomVerb}
          verbIndex={verbIndex}
        />
        <Case
          toggleShowHints={toggleShowHints}
          generateAll={generateAll}
          generateAllClicked={() => generateAllClicked}
          generateRandomCase={() => generateRandomCase}
          caseIndex={caseIndex}
        />
        <Noun
          toggleShowHints={toggleShowHints}
          generateAll={generateAll}
          generateAllClicked={() => generateAllClicked}
          generateRandomNoun={() => generateRandomNoun}
          nounIndex={nounIndex}
        />
      </div>
      <div className="sentenceSection">
        <h2>{pronounIndex.pronoun}</h2>
        {
          verbAnswer?.length > 0 ?
            <h2 className="answer">{verbAnswer}</h2>
            :
            <h2>{verbIndex.verb}</h2>
        }
        <h2>{caseIndex.case}</h2>
        {
          nounAnswer.length > 0 ?
            <h2 className="answer">{nounAnswer}</h2>
            :
            <h2>{nounIndex.noun}</h2>
        }
      </div>
      <div className="buttonSections">
        <button className="buttonNewAll" onClick={generateAllClicked}>New all</button>
        {pronounIndex &&
          <>
            <button className="buttonHints" onClick={toggleShowHintsClicked}>Hints</button>
            <button className="buttonAnswers" onClick={createAnswers}>Answers</button>
          </>
        }
      </div>
      <div className="linksSection">
        <a target="_blank" href="https://www.google.com/search?q=english+to+czech&rlz=1C5CHFA_enCZ1003CZ1004&oq=english+to+czech&aqs=chrome..69i57.2858j0j7&sourceid=chrome&ie=UTF-8">English to Czech Translate</a>
        <br></br>
        <a target="_blank" href="https://www.locallingo.com/czech/grammar/nouns_declension.html">Prepositions</a>
      </div>
    </div>
  );
}

export default App;
