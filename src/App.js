import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Moods  from "./components/Moods";
import Programmers from "./Programmers";


function App() {
  return (
    <div className="App">
      Import Each component to app  <Counter/> <Input /> <Moods/><Programmers/>
    </div> 
  );
}

export default App;