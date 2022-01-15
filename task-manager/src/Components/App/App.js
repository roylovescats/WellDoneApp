import logo from './logo.svg';
import './App.css';
import { Hamburger } from '../../Components/Hamburger/Hamburger.js';
import { Clock } from '../../Components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.openHamburger 
  }
  openHamburger() {
    this.setState()
  }
  render(){
    return (
      <div>
        <Clock />
        <Hamburger />
      </div>
    )
  }
}

export default App;