import { Container } from 'semantic-ui-react';
import MyNavbar from './components/MyNavbar';
import Logo from './components/Logo';
import Body from './components/Body';
import Selection from './components/Selection';
import GoBtn from './components/GoBtn';
import ImgInsrt from './components/Image';
import HeaderExampleImage from './components/Header';


function App(){
  return(
    <Container>
    <HeaderExampleImage/>
    <ImgInsrt/>
      <MyNavbar />
     <Logo/>
     <Body/>
     <GoBtn/>
    </Container>

  )
}

export default App;