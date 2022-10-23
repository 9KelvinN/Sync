import logo from './logo.svg';
import './App.css';
import Splash from './Splash';

function App() {
  var curPage = 0;
  switch (curPage) {
    case 0:
      return Splash();
    default:
      return;
  }
}

export default App;
