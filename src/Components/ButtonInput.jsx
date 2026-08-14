export default function ButtonInput({onClick}){
  return <input
           type="button"
           value="Send"
           id="sendBtn"
           onClick={onClick}
            />

}