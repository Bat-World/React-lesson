import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Moods  from "./components/Moods";


function App() {
  return (
    <div className="App">
      Import Each component to app  <Counter/> <Input /> <Moods/>
    </div> 
  );
}

export default App;