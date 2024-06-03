import './sheets/App.css';
import NavBar from './NavBar/NavBar.tsx';
import BackgroundImage from './Homepage/BackgroundImage.tsx';
import AboutMe from './Homepage/AboutMe.tsx';
import LandingMenu from './Homepage/LandingMenu.tsx';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <BackgroundImage></BackgroundImage>
    <AboutMe></AboutMe>
    <LandingMenu></LandingMenu>
    </>
  );
}

export default App;
