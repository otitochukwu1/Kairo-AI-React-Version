import './App.css'
import { useState } from 'react'
import TextInput from "./Components/TextInput"
import ButtonInput from "./Components/ButtonInput"
import SideBar from "./Components/SideBar"
import SidebarToggle from "./Helpers/Header"
import AboutDeveloper from "./Components/AboutDev"
import Header from "./Components/Header"



export default function App(){
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme, setTheme] = useState("light")
  const [loading, setLoading] = useState(false)
const [showAbout, setShowAbout] = useState(false)


  function handleChange(event){
    setInputValue(event.target.value)
  }

  function handleTheme(){
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  function handleSideBar(){
    setSidebarOpen(prev => !prev)
  }

function handleAboutClick(){
  setShowAbout(true)
  setSidebarOpen(false)
}

function handleBackFromAbout(){
  setShowAbout(false)
}

  async function handleClick(){
    if(inputValue.trim() === "") {
      return
    }

    const userMessage = inputValue
    setInputValue("")
    setLoading(true)

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "user", content: userMessage }
          ]
        })
      })

      const data = await response.json()

      if(!response.ok){
        setMessages(prev => [...prev, {
          user: userMessage,
          bot: "Error: " + (data.error?.message || "Something went wrong.")
        }])
      } else {
        const botReply = data.choices[0].message.content
        setMessages(prev => [...prev, { user: userMessage, bot: botReply }])
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        user: userMessage,
        bot: "Network error. Please check your connection and try again."
      }])
    } finally {
      setLoading(false)
    }
  }

  
return (
  <div className={theme}>
    <SidebarToggle onClick={handleSideBar} />
    
    <Header/>

    <SideBar
      onClick={handleSideBar}
      isOpen={sidebarOpen}
      themeClick={handleTheme}
      aboutClick={handleAboutClick}
    />

    {showAbout ? (
      <AboutDeveloper onClick={handleBackFromAbout} />
    ) : (
      <>
        <main onClick={() => setSidebarOpen(false)}>
          {messages.map((message, index) =>
            <div key={index}>
              <p className="left">{message.user}</p>
              <p className="right">{message.bot}</p>
            </div>
          )}
          {loading && <p className="right">Thinking...</p>}
        </main>

        <footer>
          <div className="inputBar">
            <TextInput value={inputValue} onChange={handleChange} />
            <ButtonInput onClick={handleClick} />
          </div>
        </footer>
      </>
    )}
  </div>
)

}