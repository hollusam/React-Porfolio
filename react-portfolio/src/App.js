
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Wrapper>
      <Navbar />
      <Header />
      <About />
      </Wrapper>
    </div>
  );
}

export default App;
