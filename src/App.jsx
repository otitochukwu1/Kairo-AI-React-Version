import './App.css'
import {useState} from 'react'
import TextInput from "./Components/TextInput"
import ButtonInput from "./Components/ButtonInput"
import {aiName,messageArray,} from "./DummyMessage"
import SideBar from  "./Components/SideBar"
import SidebarToggle from "./Helpers/Header"
export default function App(){
const [inputValue,setInputValue]  =useState("")
const [messages, setMessages] = useState([])
const [sidebarOpen, setSidebarOpen] = useState(false)



function handleChange(event){
  setInputValue(event.target.value)
  }


function handleClick(){

if(inputValue==="") {
  return
}
  
const finder = messageArray.find(message=>
   message.userMessage === inputValue.trim().toLowerCase() )
setInputValue("")   
    
    if(finder){
setMessages(prev=>[...prev,{
  user:inputValue,
  bot:finder.botResponse
}])
  }else if(finder===undefined){
  setMessages(prev=>[...prev,{
  user:inputValue,
  bot:"I might not recognize that command yet, as I'm currently undergoing training. Please make your command clear and well-spelled to help me assist you better."
    
}])
  }
 
}
  
 function handleSideBar(){
  setSidebarOpen(prev => !prev) 
 } 
  
  return (
    <>
    <SidebarToggle 
    onClick={handleSideBar} 
    />
    
     <SideBar
    onClick={handleSideBar} 
     isOpen={sidebarOpen} 
     />
     
  <main
    onClick={()=>setSidebarOpen(false)}>
    {messages.map((message,index)=>
     <div key={index}>
       <p className="left">
       {message.user}</p>
       <p className="right">
        {message.bot}
        </p>
    </div>)} 
  </main>
  <footer>
   <div className="inputBar">
   <TextInput
    value={inputValue}
    onChange={handleChange}
     />
      <ButtonInput
      onClick={handleClick}
       />
        </div>
      </footer>
    </>
    
    )
}