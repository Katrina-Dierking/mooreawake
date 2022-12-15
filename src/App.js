
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import { About } from './views/about/About';
import {Contact} from './views/contact/Contact'
import {Staff} from './views/staff/Staff'
import { Scott } from './views/staff/scott/Scott';
import {Give} from './views/give/Give'
import {Gallery} from './views/gallery/Gallery'
import { Connect } from './views/connect/Connect';
import { Events } from './views/events/Events';
import { Resources } from './views/resources/Resources';


function App() {
  return (
    // <div className="App">
     
    //    <Home />
   
    // </div>

    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='staff' element={<Staff />} />
        <Route path='scott' element={<Scott />} />
        <Route path='contact' element={<Contact/>} />
        <Route path='connect' element={<Connect />} />
        <Route path='events' element={<Events />} />
        <Route path ="resources" element={<Resources />} />
        <Route path='give' element={<Give />} />
        <Route path='gallery' element={<Gallery />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
