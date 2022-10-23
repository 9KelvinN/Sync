import logo from './logo.svg';
import './App.css';
import Splash from './Splash';
import CreationDialogue from './CreationDialogue';
import Calendar from './Calendar';

function App() {
  var curPage = 2;
  switch (curPage) {
    case 0:
      return Splash();
    case 1:
      return CreationDialogue();
    case 2:
      return Calendar();
    default:
      return;
  }
}

export default App;
