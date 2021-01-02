import logo from './logo.svg';
import './assets/css/style.css';
import PageBorder from './components/pageBorder';
import Nav from './components/nav';
import Hero from './components/Hero';
import ContentBlock from './components/ContentBlock';

function App() {
  return (
    <div className="App">
      <PageBorder />
      <Nav />
      <Hero />
      <ContentBlock />
    </div>
  );
}

export default App;
