import './App.css'
import {useState} from 'react'
import TextInput from "./Components/TextInput"
import ButtonInput from "./Components/ButtonInput"
import {aiName,messageArray,} from "./messageArray"

export default function App(){
  
  
  return (
    <>
      
      <main>
        Hello Main
      </main>
      <footer>
        <label for="textInput">
          <TextInput/>
          <ButtonInput/>
        </label>
      </footer>
    </>
    
    )
}