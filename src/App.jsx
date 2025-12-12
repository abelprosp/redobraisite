import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';
import Integrations from './components/Integrations';
import Process from './components/Process';
import Footer from './components/Footer';
import RedobraiMode from './components/RedobraiMode';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Technology />
        <RedobraiMode />
        <Integrations />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;
