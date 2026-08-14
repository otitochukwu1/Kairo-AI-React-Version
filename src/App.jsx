import './App.css'
import {useState} from 'react'
import TextInput from "./Components/TextInput"
import ButtonInput from "./Components/ButtonInput"
import {aiName,messageArray,} from "./DummyMessage"

export default function App(){
const [inputValue,setInputValue]  =useState("")

function handleChange(event){
  setInputValue(event.target.value)
  alert(inputValue)
}
  
  
  
  
  return (
    <>
      
      <main>
        Hello Main
      </main>
      <footer>
        <label for="textInput">
          <TextInput
          value={inputValue}
          />
          <ButtonInput
          onClick={handleChange}
          />
        </label>
      </footer>
    </>
    
    )
}