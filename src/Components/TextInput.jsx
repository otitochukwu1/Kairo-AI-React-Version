export default  function TextInput ({value,onChange}){
  return <input
    type="text"
    placeholder="Enter Message"
    id="textInput"
    value={value}
    onChange={onChange}
    />
}






