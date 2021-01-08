import logo from './logo.svg';
import './assets/css/style.css';
import PageBorder from './components/pageBorder';
import Nav from './components/nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  onmousemove = function(e){
    let size = '35';
    var cursor = document.getElementById('customCursor');
    cursor.style.top = (e.clientY - size) + 'px';
    cursor.style.left = (e.clientX - size) + 'px';
  }
  return (
    <div className="App">
      <div id='customCursor'></div>
      <Router>
        <PageBorder />
        <Nav />
        <Route exact path='/' component={Home} />
      </Router>
    </div>
  );
}

export default App;
