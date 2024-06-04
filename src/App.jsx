import './sheets/App.css';
import NavBar from './NavBar/NavBar.tsx';
import BackgroundImage from './Homepage/BackgroundImage.tsx';
import AboutMe from './Homepage/AboutMe.tsx';
import LandingMenu from './Homepage/LandingMenu/LandingMenu.tsx';
import Socials from './Homepage/Socials/Socials.tsx';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <BackgroundImage></BackgroundImage>
    <AboutMe></AboutMe>
    <LandingMenu></LandingMenu>
    <Socials></Socials>
    </>
  );
}

export default App;
