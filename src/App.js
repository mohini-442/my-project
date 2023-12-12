import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './assets/components/Nav';
import Firstsection from './assets/components/Firstsection';
import Section2 from './assets/components/Section2';
import Timeline from './assets/components/Timeline';
import Accordiansection from './assets/components/Accordiansection';
import Section3 from './assets/components/Section3';
import Footersection from './assets/components/Footersection';
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Firstsection />
      <Section2 />
      <Timeline />
      <Accordiansection />
      <Section3 />
      <Footersection />
    </div>
  );
}

export default App;
