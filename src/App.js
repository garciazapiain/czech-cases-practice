import React from "react";
import './App.css';
import Pronoun from "./components/Pronoun"
import Verb from "./components/Verb"
import Case from "./components/Case"
import Noun from "./components/Noun"

function App() {
  const [toggleShowHints, setToggleShowHints] = React.useState("")
  const [generateAll, setGenerateAll] = React.useState(false)

  function toggleShowHintsClicked () {
    setToggleShowHints(!toggleShowHints)
  }

  function generateAllClicked(){
    setGenerateAll(true)
    setTimeout(()=>{
      setGenerateAll(false)
    },100)
  }


  return (
    <div className="App">
      <h1>Czech cases practice</h1>
      <div className='generatorContainer'>
        <Pronoun
          toggleShowHints={toggleShowHints}
          generateAll={generateAll}
          generateAllClicked={()=>generateAllClicked}
        />
        <Verb
          toggleShowHints={toggleShowHints}
          generateAll={generateAll}
          generateAllClicked={()=>generateAllClicked}
        />
        <Case
          toggleShowHints={toggleShowHints}
          generateAll={generateAll}
          generateAllClicked={()=>generateAllClicked}
        />
        <Noun
          toggleShowHints={toggleShowHints}
          generateAll={generateAll}
          generateAllClicked={()=>generateAllClicked}
        /> 
      </div>
      <button className="button" onClick={generateAllClicked}>Generate All</button>
      <br></br>
      <button className="button" onClick={toggleShowHintsClicked}>Show Hints</button>
      <div>
      <a target="_blank" href="https://www.google.com/search?q=english+to+czech&rlz=1C5CHFA_enCZ1003CZ1004&oq=english+to+czech&aqs=chrome..69i57.2858j0j7&sourceid=chrome&ie=UTF-8">English to Czech</a>
      <br></br>
      <a target="_blank" href="https://www.locallingo.com/czech/grammar/nouns_declension.html">Prepositions</a>
      </div>
    </div>
  );
}

export default App;
