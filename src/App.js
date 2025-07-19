import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Education from "./components/Education/education";
import Training from './components/Training/training';
import Technology from "./components/Technology/technology";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <Technology />
            <Education />
            <Training/>
            
            <Contact />
            <Footer />
            
            
        </div>
    );
}

export default App;
