
const headOrTail =["Head","Tail"]

class Message{
  constructor(userMessage,botResponse){
    this.userMessage=userMessage;
    this.botResponse=botResponse;
  }
}


export const aiName = "Kairo"

 






export const messageArray =[
 new Message("hello", `Hi There I Am ${aiName} AI i Am Currently Undergoing Training`),
new Message("flip a coin", `Alright You got ${headOrTail[Math.floor(Math.random() * headOrTail.length)]}`),
new Message("what is the time", `The time is ${new Date().toLocaleTimeString()}`),
new Message("who developed you", "I was developed by Otikas."),
new Message("what is your name", `My name is ${aiName} nice to meet you!`),
new Message("how are you", "I'm just a bunch of code, but I'm doing great! How about you?"),
new Message("bye", "Goodbye! Come back anytime you want to chat."),
new Message("thank you", "You're welcome! Happy to help."),
new Message("roll a dice", `You rolled a ${Math.floor(Math.random() * 6) + 1}`),
new Message("what can you do", "I can greet you, tell the time, flip a coin, or roll a dice."),
new Message("what is today's date", `Today's date is ${new Date().toLocaleDateString()}`),
new Message("tell me a joke", "Why do programmers prefer dark mode? Because light attracts bugs."),
new Message("are you a robot", "Yes, I'm a simple chatbot running on JavaScript logic."),
new Message("good morning", "Good morning! Hope your day goes well."),
new Message("good night", "Good night! Sleep well."),
new Message("what is javascript", "JavaScript is a programming language used to make websites interactive."),
new Message("what day is it", `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`),
new Message("do you like me", "Of course! I like everyone who chats with me."),
new Message("how old are you", "I don't have an age, I'm just lines of code."),
new Message("help", "You can ask me to greet you, tell the time, flip a coin, roll a dice, or tell you a joke.")
 ]
 
 
 
 
 
 
 
 
 
 
 
  
  