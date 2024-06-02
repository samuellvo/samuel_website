import './sheets/App.css';
import NavBar from './NavBar/NavBar.tsx';
import BackgroundImage from './Homepage/BackgroundImage.tsx';
import AboutMe from './Homepage/AboutMe.tsx';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <BackgroundImage></BackgroundImage>
    <AboutMe></AboutMe>
    </>
  );
}

export default App;
