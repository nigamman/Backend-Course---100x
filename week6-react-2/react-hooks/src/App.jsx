import React, {useState} from "react"

function App() { 
  const [title, setTitle] = useState("I am admin");

  function updateTitle() {
    setTitle("my name is "+ Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header> {/* dynamic header */}
      <br></br>
      <Header title= "heading-2"></Header>{/* static header */}
      <Header title= "heading-3"></Header>
    </div>
  )                                                         
}
const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})

export default App;