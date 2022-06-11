import React, {useState, useEffect, useRef} from 'react';
import './assets/css/style.css';
import './App.css';
import PageBorder from './components/pageBorder';
import Nav from './components/nav';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CursContext from "./components/Context";
import BounceLoader from "react-spinners/BounceLoader";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


function App() {

  onmousemove = function(e){
    let size = '35';
    var cursor = document.getElementById('customCursor');
    if(cursor !== null){
      cursor.style.top = (e.clientY - size) + 'px';
      cursor.style.left = (e.clientX - size) + 'px';
    }
  }

  const mouseSize = {
    shrink: () => {
      document.getElementById('customCursor').classList.add('shrink');
    },
    expand: () => {
      document.getElementById('customCursor').classList.remove('shrink');
    }
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  
  const containerRef = useRef(null)
  return (

      <LocomotiveScrollProvider
        options = {
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
          }
        }
      watch = {
        [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
      containerRef = { containerRef }
        >
        <main>
        <div className="App" data-scroll-container ref={containerRef}>
            {
              loading ?
              <div className='loader'>
                <BounceLoader
                size='500'
                color='#fff'
                />
              </div>
              :
            <>
            <div id='customCursor'></div>
            <Router>
              <CursContext.Provider value={mouseSize}>
                <PageBorder />
                <Nav />
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
              </CursContext.Provider>
            </Router>
            </>
            }
          </div>
        </main>
</LocomotiveScrollProvider >
  );
}

export default App;
