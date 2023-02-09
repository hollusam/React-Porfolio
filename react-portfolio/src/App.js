
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Form from './components/Contact';
import Footer from './components/Footer';
import Spacer from './components/Spacer';


function App() {
  return (
    <div className="App">
      <Wrapper>
      <Navbar />
      <Header />
      <Spacer />
      <About />
      <Spacer />
      <Project />
      <Form />
      <Spacer />
      
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
