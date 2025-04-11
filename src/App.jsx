import React from 'react'; // rfce
import Navbar from './components/Navbar';
import Home from './components/Home';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Footer from './components/Footer'; // You forgot to import this in your snippet!

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow">
        <Home />
        <Achievements />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
