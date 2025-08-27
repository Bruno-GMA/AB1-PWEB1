import './App.css';

import NavBar from './components/NavBar/Navbar';
import Search from './components/Search/Search';
import ExportCard from './components/ExportCard/ExportCard';
import Sobre from './components/Sobre/Sobre';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <div className='primeira-parte'>
        <Search />
        <ExportCard />
      </div>
      <div className='segunda-parte'>
        <Sobre />
      </div>
      <Footer />
    </div>
  );
}

export default App;
