import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
